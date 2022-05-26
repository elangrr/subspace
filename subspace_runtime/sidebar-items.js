initSidebarItems({"constant":[["EXECUTION_WASM_BUNDLE",""],["MILLISECS_PER_BLOCK","Since Subspace is probabilistic this is the average expected block time that we are targeting. Blocks will be produced at a minimum duration defined by `SLOT_DURATION`, but some slots will not be allocated to any farmer and hence no block will be produced. We expect to have this block time on average following the defined slot duration and the value of `c` configured for Subspace (where `1 - c` represents the probability of a slot being empty). This value is only used indirectly to define the unit constants below that are expressed in blocks. The rest of the code should use `SLOT_DURATION` instead (like the Timestamp pallet for calculating the minimum period)."],["VERSION",""],["WASM_BINARY",""],["WASM_BINARY_BLOATY",""]],"enum":[["Call",""],["Event",""],["FeedProcessorKind","FeedProcessorId represents the available FeedProcessor impls"],["OriginCaller",""]],"fn":[["native_version","The version information used to identify this runtime when compiled natively."]],"mod":[["api",""]],"struct":[["BlockHashCount",""],["BlockReward",""],["BlockchainHistorySize",""],["CallFilter",""],["CreditSupply",""],["ExpectedBlockTime",""],["ExpectedVotesPerBlock",""],["GenesisConfig",""],["GrandpaValidator",""],["LiquidityInfo",""],["MaxFeeds",""],["MaximumReceiptDrift",""],["MinVestedTransfer",""],["OnChargeTransaction","Implementation of [`pallet_transaction_payment::OnChargeTransaction`] that charges transaction fees and distributes storage/compute fees and tip separately."],["Origin","The runtime origin type representing the origin of a call."],["PalletInfo","Provides an implementation of `PalletInfo` to provide information about the pallet setup in the runtime."],["ParachainImporter",""],["PolkadotLike","Polkadot-like chain."],["ReceiptsPruningDepth",""],["Runtime",""],["RuntimeApi",""],["RuntimeApiImpl","Implements all runtime apis for the client side."],["SessionKeys",""],["ShouldAdjustSolutionRange",""],["SlotProbability",""],["StorageFeesEscrowBlockReward",""],["StorageFeesEscrowBlockTax",""],["SubspaceBlockLength","We allow for 3.75 MiB for `Normal` extrinsic with 5 MiB maximum block length."],["SubspaceBlockWeights","We allow for 2 seconds of compute with a 6 second average block time."],["TotalSpacePledged",""],["TransactionByteFee",""],["Version",""],["VoteReward",""]],"type":[["Address","The address format for describing accounts."],["AllPallets","All pallets included in the runtime as a nested tuple of types."],["AllPalletsReversedWithSystemFirst","All pallets included in the runtime as a nested tuple of types in reversed order. With the system pallet first."],["AllPalletsWithSystem","All pallets included in the runtime as a nested tuple of types."],["AllPalletsWithSystemReversed","All pallets included in the runtime as a nested tuple of types in reversed order."],["AllPalletsWithoutSystem","All pallets included in the runtime as a nested tuple of types. Excludes the System pallet."],["AllPalletsWithoutSystemReversed","All pallets included in the runtime as a nested tuple of types in reversed order. Excludes the System pallet."],["Balances",""],["BalancesConfig",""],["Block","Block type as expected by this runtime."],["Executive","Executive: handles dispatch to the various modules."],["Executor",""],["ExecutorConfig",""],["FeedId","Type used to represent a FeedId or ChainId"],["Feeds",""],["GrandpaFinalityVerifier",""],["Header","Block header type as expected by this runtime."],["ObjectStore",""],["OffencesSubspace",""],["Rewards",""],["SS58Prefix",""],["SignedExtra","The SignedExtension to the basic transaction logic."],["Subspace",""],["Sudo",""],["SudoConfig",""],["System",""],["SystemConfig",""],["Timestamp",""],["TransactionFees",""],["TransactionPayment",""],["TransactionPaymentConfig",""],["UncheckedExtrinsic","Unchecked extrinsic type as expected by this runtime."],["Utility",""],["Vesting",""],["VestingConfig",""]]});