// Copyright 2021 Parity Technologies (UK) Ltd.
// This file is part of Cumulus.

// Cumulus is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Cumulus is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Cumulus.  If not, see <http://www.gnu.org/licenses/>.

//! The relay-chain provided consensus algoritm for parachains.
//!
//! This is the simplest consensus algorithm you can use when developing a parachain. It is a
//! permission-less consensus algorithm that doesn't require any staking or similar to join as a
//! collator. In this algorithm the consensus is provided by the relay-chain. This works in the
//! following way.
//!
//! 1. Each node that sees itself as a collator is free to build a parachain candidate.
//!
//! 2. This parachain candidate is send to the parachain validators that are part of the relay chain.
//!
//! 3. The parachain validators validate at most X different parachain candidates, where X is the
//! total number of parachain validators.
//!
//! 4. The parachain candidate that is backed by the most validators is choosen by the relay-chain
//! block producer to be added as backed candidate on chain.
//!
//! 5. After the parachain candidate got backed and included, all collators start at 1.

#![allow(clippy::all)]

use cirrus_node_primitives::PersistedValidationData;
use cumulus_client_consensus_common::{ParachainBlockImport, ParachainConsensus};
use parking_lot::Mutex;
use sc_client_api::{Backend, HeaderBackend};
use sc_consensus::BlockImport;
use sp_api::ProvideRuntimeApi;
use sp_consensus::{EnableProofRecording, Environment, ProofRecording, Proposer};
use sp_inherents::CreateInherentDataProviders;
use sp_runtime::{
	generic::BlockId,
	traits::{Block as BlockT, NumberFor},
};
use std::{marker::PhantomData, sync::Arc};
use subspace_runtime_primitives::{opaque::Block as PBlock, Hash as PHash};

mod import_queue;
pub use import_queue::{import_queue, Verifier};

/// The implementation of the relay-chain provided consensus for parachains.
pub struct PrimaryChainConsensus<B, PF, BI, RClient, RBackend, CIDP> {
	_phantom: PhantomData<B>,
	proposer_factory: Arc<Mutex<PF>>,
	create_inherent_data_providers: Arc<CIDP>,
	block_import: Arc<futures::lock::Mutex<ParachainBlockImport<BI>>>,
	relay_chain_client: Arc<RClient>,
	relay_chain_backend: Arc<RBackend>,
}

impl<B, PF, BI, RClient, RBackend, CIDP> Clone
	for PrimaryChainConsensus<B, PF, BI, RClient, RBackend, CIDP>
{
	fn clone(&self) -> Self {
		Self {
			_phantom: PhantomData,
			proposer_factory: self.proposer_factory.clone(),
			create_inherent_data_providers: self.create_inherent_data_providers.clone(),
			block_import: self.block_import.clone(),
			relay_chain_backend: self.relay_chain_backend.clone(),
			relay_chain_client: self.relay_chain_client.clone(),
		}
	}
}

impl<B, PF, BI, RClient, RBackend, CIDP> PrimaryChainConsensus<B, PF, BI, RClient, RBackend, CIDP>
where
	B: BlockT,
	RClient: ProvideRuntimeApi<PBlock> + HeaderBackend<PBlock>,
	RBackend: Backend<PBlock>,
	CIDP: CreateInherentDataProviders<B, (PHash, PersistedValidationData)>,
{
	/// Create a new instance of relay-chain provided consensus.
	pub fn new(
		proposer_factory: PF,
		create_inherent_data_providers: CIDP,
		block_import: BI,
		polkadot_client: Arc<RClient>,
		polkadot_backend: Arc<RBackend>,
	) -> Self {
		Self {
			proposer_factory: Arc::new(Mutex::new(proposer_factory)),
			create_inherent_data_providers: Arc::new(create_inherent_data_providers),
			block_import: Arc::new(futures::lock::Mutex::new(ParachainBlockImport::new(
				block_import,
			))),
			relay_chain_backend: polkadot_backend,
			relay_chain_client: polkadot_client,
			_phantom: PhantomData,
		}
	}
}

#[async_trait::async_trait]
impl<B, PF, BI, RClient, RBackend, CIDP> ParachainConsensus
	for PrimaryChainConsensus<B, PF, BI, RClient, RBackend, CIDP>
where
	B: BlockT,
	RClient: ProvideRuntimeApi<PBlock> + HeaderBackend<PBlock> + Send + Sync,
	RBackend: Backend<PBlock>,
	BI: BlockImport<B> + Send + Sync,
	PF: Environment<B> + Send + Sync,
	PF::Proposer: Proposer<
		B,
		Transaction = BI::Transaction,
		ProofRecording = EnableProofRecording,
		Proof = <EnableProofRecording as ProofRecording>::Proof,
	>,
	CIDP: CreateInherentDataProviders<B, (PHash, PersistedValidationData)>,
{
	fn block_number_from_id(
		&self,
		id: &BlockId<PBlock>,
	) -> sp_blockchain::Result<Option<NumberFor<PBlock>>> {
		self.relay_chain_client.block_number_from_id(id)
	}
}
