(function() {var implementors = {};
implementors["cirrus_node_primitives"] = [{"text":"impl TypeInfo for <a class=\"struct\" href=\"cirrus_node_primitives/struct.HeadData.html\" title=\"struct cirrus_node_primitives::HeadData\">HeadData</a>","synthetic":false,"types":["cirrus_node_primitives::HeadData"]}];
implementors["cirrus_pallet_executive"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"cirrus_pallet_executive/trait.Config.html\" title=\"trait cirrus_pallet_executive::Config\">Config</a>&gt; TypeInfo for <a class=\"enum\" href=\"cirrus_pallet_executive/enum.Event.html\" title=\"enum cirrus_pallet_executive::Event\">Event</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"cirrus_pallet_executive/trait.Config.html\" title=\"trait cirrus_pallet_executive::Config\">Config</a> + 'static,&nbsp;</span>","synthetic":false,"types":["cirrus_pallet_executive::pallet::Event"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"cirrus_pallet_executive/trait.Config.html\" title=\"trait cirrus_pallet_executive::Config\">Config</a>&gt; TypeInfo for <a class=\"enum\" href=\"cirrus_pallet_executive/enum.Call.html\" title=\"enum cirrus_pallet_executive::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;&lt;T as <a class=\"trait\" href=\"cirrus_pallet_executive/trait.Config.html\" title=\"trait cirrus_pallet_executive::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"cirrus_pallet_executive/trait.Config.html#associatedtype.Call\" title=\"type cirrus_pallet_executive::Config::Call\">Call</a>&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"cirrus_pallet_executive/trait.Config.html\" title=\"trait cirrus_pallet_executive::Config\">Config</a> + 'static,&nbsp;</span>","synthetic":false,"types":["cirrus_pallet_executive::pallet::Call"]}];
implementors["cirrus_test_runtime"] = [{"text":"impl TypeInfo for <a class=\"struct\" href=\"cirrus_test_runtime/struct.SessionKeys.html\" title=\"struct cirrus_test_runtime::SessionKeys\">SessionKeys</a>","synthetic":false,"types":["cirrus_test_runtime::impl::SessionKeys"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"cirrus_test_runtime/struct.Runtime.html\" title=\"struct cirrus_test_runtime::Runtime\">Runtime</a>","synthetic":false,"types":["cirrus_test_runtime::impl::Runtime"]},{"text":"impl TypeInfo for <a class=\"enum\" href=\"cirrus_test_runtime/enum.Event.html\" title=\"enum cirrus_test_runtime::Event\">Event</a>","synthetic":false,"types":["cirrus_test_runtime::impl::Event"]},{"text":"impl TypeInfo for <a class=\"enum\" href=\"cirrus_test_runtime/enum.OriginCaller.html\" title=\"enum cirrus_test_runtime::OriginCaller\">OriginCaller</a>","synthetic":false,"types":["cirrus_test_runtime::impl::OriginCaller"]},{"text":"impl TypeInfo for <a class=\"enum\" href=\"cirrus_test_runtime/enum.Call.html\" title=\"enum cirrus_test_runtime::Call\">Call</a>","synthetic":false,"types":["cirrus_test_runtime::impl::Call"]}];
implementors["pallet_executor"] = [{"text":"impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_executor/enum.Error.html\" title=\"enum pallet_executor::Error\">Error</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'static,&nbsp;</span>","synthetic":false,"types":["pallet_executor::pallet::Error"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_executor/trait.Config.html\" title=\"trait pallet_executor::Config\">Config</a>&gt; TypeInfo for <a class=\"enum\" href=\"pallet_executor/enum.Event.html\" title=\"enum pallet_executor::Event\">Event</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_executor/trait.Config.html\" title=\"trait pallet_executor::Config\">Config</a> + 'static,&nbsp;</span>","synthetic":false,"types":["pallet_executor::pallet::Event"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_executor/trait.Config.html\" title=\"trait pallet_executor::Config\">Config</a>&gt; TypeInfo for <a class=\"enum\" href=\"pallet_executor/enum.Call.html\" title=\"enum pallet_executor::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"sp_executor/struct.ExecutionReceipt.html\" title=\"struct sp_executor::ExecutionReceipt\">ExecutionReceipt</a>&lt;T::Hash&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_executor/trait.Config.html\" title=\"trait pallet_executor::Config\">Config</a> + 'static,&nbsp;</span>","synthetic":false,"types":["pallet_executor::pallet::Call"]}];
implementors["pallet_feeds"] = [{"text":"impl TypeInfo for <a class=\"struct\" href=\"pallet_feeds/struct.TotalObjectsAndSize.html\" title=\"struct pallet_feeds::TotalObjectsAndSize\">TotalObjectsAndSize</a>","synthetic":false,"types":["pallet_feeds::pallet::TotalObjectsAndSize"]},{"text":"impl&lt;FeedProcessorId&gt; TypeInfo for <a class=\"struct\" href=\"pallet_feeds/struct.FeedConfig.html\" title=\"struct pallet_feeds::FeedConfig\">FeedConfig</a>&lt;FeedProcessorId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;FeedProcessorId: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;FeedProcessorId: TypeInfo + 'static,&nbsp;</span>","synthetic":false,"types":["pallet_feeds::pallet::FeedConfig"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_feeds/trait.Config.html\" title=\"trait pallet_feeds::Config\">Config</a>&gt; TypeInfo for <a class=\"enum\" href=\"pallet_feeds/enum.Event.html\" title=\"enum pallet_feeds::Event\">Event</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::AccountId: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"pallet_feeds/trait.Config.html#associatedtype.FeedId\" title=\"type pallet_feeds::Config::FeedId\">FeedId</a>: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::AccountId: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"pallet_feeds/trait.Config.html#associatedtype.FeedId\" title=\"type pallet_feeds::Config::FeedId\">FeedId</a>: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::AccountId: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"pallet_feeds/trait.Config.html#associatedtype.FeedId\" title=\"type pallet_feeds::Config::FeedId\">FeedId</a>: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::AccountId: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"pallet_feeds/trait.Config.html#associatedtype.FeedId\" title=\"type pallet_feeds::Config::FeedId\">FeedId</a>: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::AccountId: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_feeds/trait.Config.html\" title=\"trait pallet_feeds::Config\">Config</a> + 'static,&nbsp;</span>","synthetic":false,"types":["pallet_feeds::pallet::Event"]},{"text":"impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_feeds/enum.Error.html\" title=\"enum pallet_feeds::Error\">Error</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'static,&nbsp;</span>","synthetic":false,"types":["pallet_feeds::pallet::Error"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_feeds/trait.Config.html\" title=\"trait pallet_feeds::Config\">Config</a>&gt; TypeInfo for <a class=\"enum\" href=\"pallet_feeds/enum.Call.html\" title=\"enum pallet_feeds::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"pallet_feeds/trait.Config.html#associatedtype.FeedProcessorKind\" title=\"type pallet_feeds::Config::FeedProcessorKind\">FeedProcessorKind</a>: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"pallet_feeds/trait.Config.html#associatedtype.FeedId\" title=\"type pallet_feeds::Config::FeedId\">FeedId</a>: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"pallet_feeds/trait.Config.html#associatedtype.FeedProcessorKind\" title=\"type pallet_feeds::Config::FeedProcessorKind\">FeedProcessorKind</a>: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"pallet_feeds/trait.Config.html#associatedtype.FeedId\" title=\"type pallet_feeds::Config::FeedId\">FeedId</a>: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"pallet_feeds/trait.Config.html#associatedtype.FeedId\" title=\"type pallet_feeds::Config::FeedId\">FeedId</a>: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"pallet_feeds/trait.Config.html#associatedtype.FeedId\" title=\"type pallet_feeds::Config::FeedId\">FeedId</a>: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_feeds/trait.Config.html\" title=\"trait pallet_feeds::Config\">Config</a> + 'static,&nbsp;</span>","synthetic":false,"types":["pallet_feeds::pallet::Call"]}];
implementors["pallet_grandpa_finality_verifier"] = [{"text":"impl TypeInfo for <a class=\"struct\" href=\"pallet_grandpa_finality_verifier/struct.InitializationData.html\" title=\"struct pallet_grandpa_finality_verifier::InitializationData\">InitializationData</a>","synthetic":false,"types":["pallet_grandpa_finality_verifier::InitializationData"]},{"text":"impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_grandpa_finality_verifier/pallet/enum.Error.html\" title=\"enum pallet_grandpa_finality_verifier::pallet::Error\">Error</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'static,&nbsp;</span>","synthetic":false,"types":["pallet_grandpa_finality_verifier::pallet::Error"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_grandpa_finality_verifier/pallet/trait.Config.html\" title=\"trait pallet_grandpa_finality_verifier::pallet::Config\">Config</a>&gt; TypeInfo for <a class=\"enum\" href=\"pallet_grandpa_finality_verifier/pallet/enum.Call.html\" title=\"enum pallet_grandpa_finality_verifier::pallet::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_grandpa_finality_verifier/pallet/trait.Config.html\" title=\"trait pallet_grandpa_finality_verifier::pallet::Config\">Config</a> + 'static,&nbsp;</span>","synthetic":false,"types":["pallet_grandpa_finality_verifier::pallet::Call"]}];
implementors["pallet_object_store"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_object_store/trait.Config.html\" title=\"trait pallet_object_store::Config\">Config</a>&gt; TypeInfo for <a class=\"enum\" href=\"pallet_object_store/enum.Event.html\" title=\"enum pallet_object_store::Event\">Event</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::AccountId: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_object_store/trait.Config.html\" title=\"trait pallet_object_store::Config\">Config</a> + 'static,&nbsp;</span>","synthetic":false,"types":["pallet_object_store::pallet::Event"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_object_store/trait.Config.html\" title=\"trait pallet_object_store::Config\">Config</a>&gt; TypeInfo for <a class=\"enum\" href=\"pallet_object_store/enum.Call.html\" title=\"enum pallet_object_store::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_object_store/trait.Config.html\" title=\"trait pallet_object_store::Config\">Config</a> + 'static,&nbsp;</span>","synthetic":false,"types":["pallet_object_store::pallet::Call"]}];
implementors["pallet_offences_subspace"] = [{"text":"impl TypeInfo for <a class=\"enum\" href=\"pallet_offences_subspace/enum.Event.html\" title=\"enum pallet_offences_subspace::Event\">Event</a>","synthetic":false,"types":["pallet_offences_subspace::pallet::Event"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_offences_subspace/trait.Config.html\" title=\"trait pallet_offences_subspace::Config\">Config</a>&gt; TypeInfo for <a class=\"enum\" href=\"pallet_offences_subspace/enum.Call.html\" title=\"enum pallet_offences_subspace::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_offences_subspace/trait.Config.html\" title=\"trait pallet_offences_subspace::Config\">Config</a> + 'static,&nbsp;</span>","synthetic":false,"types":["pallet_offences_subspace::pallet::Call"]}];
implementors["pallet_rewards"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_rewards/trait.Config.html\" title=\"trait pallet_rewards::Config\">Config</a>&gt; TypeInfo for <a class=\"enum\" href=\"pallet_rewards/enum.Event.html\" title=\"enum pallet_rewards::Event\">Event</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::AccountId: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as <a class=\"trait\" href=\"pallet_rewards/trait.Config.html\" title=\"trait pallet_rewards::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_rewards/trait.Config.html#associatedtype.Currency\" title=\"type pallet_rewards::Config::Currency\">Currency</a> as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_rewards/trait.Config.html\" title=\"trait pallet_rewards::Config\">Config</a> + 'static,&nbsp;</span>","synthetic":false,"types":["pallet_rewards::pallet::Event"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_rewards/trait.Config.html\" title=\"trait pallet_rewards::Config\">Config</a>&gt; TypeInfo for <a class=\"enum\" href=\"pallet_rewards/enum.Call.html\" title=\"enum pallet_rewards::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_rewards/trait.Config.html\" title=\"trait pallet_rewards::Config\">Config</a> + 'static,&nbsp;</span>","synthetic":false,"types":["pallet_rewards::pallet::Call"]}];
implementors["pallet_subspace"] = [{"text":"impl TypeInfo for <a class=\"enum\" href=\"pallet_subspace/enum.Event.html\" title=\"enum pallet_subspace::Event\">Event</a>","synthetic":false,"types":["pallet_subspace::pallet::Event"]},{"text":"impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_subspace/enum.Error.html\" title=\"enum pallet_subspace::Error\">Error</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'static,&nbsp;</span>","synthetic":false,"types":["pallet_subspace::pallet::Error"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_subspace/trait.Config.html\" title=\"trait pallet_subspace::Config\">Config</a>&gt; TypeInfo for <a class=\"enum\" href=\"pallet_subspace/enum.Call.html\" title=\"enum pallet_subspace::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"type\" href=\"sp_consensus_subspace/type.EquivocationProof.html\" title=\"type sp_consensus_subspace::EquivocationProof\">EquivocationProof</a>&lt;T::Header&gt;&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_subspace/trait.Config.html\" title=\"trait pallet_subspace::Config\">Config</a> + 'static,&nbsp;</span>","synthetic":false,"types":["pallet_subspace::pallet::Call"]}];
implementors["pallet_transaction_fees"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_transaction_fees/trait.Config.html\" title=\"trait pallet_transaction_fees::Config\">Config</a>&gt; TypeInfo for <a class=\"enum\" href=\"pallet_transaction_fees/enum.Event.html\" title=\"enum pallet_transaction_fees::Event\">Event</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as <a class=\"trait\" href=\"pallet_transaction_fees/trait.Config.html\" title=\"trait pallet_transaction_fees::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_transaction_fees/trait.Config.html#associatedtype.Currency\" title=\"type pallet_transaction_fees::Config::Currency\">Currency</a> as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as <a class=\"trait\" href=\"pallet_transaction_fees/trait.Config.html\" title=\"trait pallet_transaction_fees::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_transaction_fees/trait.Config.html#associatedtype.Currency\" title=\"type pallet_transaction_fees::Config::Currency\">Currency</a> as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::AccountId: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as <a class=\"trait\" href=\"pallet_transaction_fees/trait.Config.html\" title=\"trait pallet_transaction_fees::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_transaction_fees/trait.Config.html#associatedtype.Currency\" title=\"type pallet_transaction_fees::Config::Currency\">Currency</a> as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::AccountId: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as <a class=\"trait\" href=\"pallet_transaction_fees/trait.Config.html\" title=\"trait pallet_transaction_fees::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_transaction_fees/trait.Config.html#associatedtype.Currency\" title=\"type pallet_transaction_fees::Config::Currency\">Currency</a> as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::AccountId: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as <a class=\"trait\" href=\"pallet_transaction_fees/trait.Config.html\" title=\"trait pallet_transaction_fees::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_transaction_fees/trait.Config.html#associatedtype.Currency\" title=\"type pallet_transaction_fees::Config::Currency\">Currency</a> as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_transaction_fees/trait.Config.html\" title=\"trait pallet_transaction_fees::Config\">Config</a> + 'static,&nbsp;</span>","synthetic":false,"types":["pallet_transaction_fees::pallet::Event"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_transaction_fees/trait.Config.html\" title=\"trait pallet_transaction_fees::Config\">Config</a>&gt; TypeInfo for <a class=\"enum\" href=\"pallet_transaction_fees/enum.Call.html\" title=\"enum pallet_transaction_fees::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_transaction_fees/trait.Config.html\" title=\"trait pallet_transaction_fees::Config\">Config</a> + 'static,&nbsp;</span>","synthetic":false,"types":["pallet_transaction_fees::pallet::Call"]}];
implementors["parachain_template_runtime"] = [{"text":"impl TypeInfo for <a class=\"struct\" href=\"parachain_template_runtime/struct.SessionKeys.html\" title=\"struct parachain_template_runtime::SessionKeys\">SessionKeys</a>","synthetic":false,"types":["parachain_template_runtime::impl::SessionKeys"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"parachain_template_runtime/struct.Runtime.html\" title=\"struct parachain_template_runtime::Runtime\">Runtime</a>","synthetic":false,"types":["parachain_template_runtime::impl::Runtime"]},{"text":"impl TypeInfo for <a class=\"enum\" href=\"parachain_template_runtime/enum.Event.html\" title=\"enum parachain_template_runtime::Event\">Event</a>","synthetic":false,"types":["parachain_template_runtime::impl::Event"]},{"text":"impl TypeInfo for <a class=\"enum\" href=\"parachain_template_runtime/enum.OriginCaller.html\" title=\"enum parachain_template_runtime::OriginCaller\">OriginCaller</a>","synthetic":false,"types":["parachain_template_runtime::impl::OriginCaller"]},{"text":"impl TypeInfo for <a class=\"enum\" href=\"parachain_template_runtime/enum.Call.html\" title=\"enum parachain_template_runtime::Call\">Call</a>","synthetic":false,"types":["parachain_template_runtime::impl::Call"]}];
implementors["sp_consensus_subspace"] = [{"text":"impl&lt;Offender&gt; TypeInfo for <a class=\"struct\" href=\"sp_consensus_subspace/offence/struct.OffenceDetails.html\" title=\"struct sp_consensus_subspace::offence::OffenceDetails\">OffenceDetails</a>&lt;Offender&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Offender: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Offender: TypeInfo + 'static,&nbsp;</span>","synthetic":false,"types":["sp_consensus_subspace::offence::OffenceDetails"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"sp_consensus_subspace/struct.GlobalRandomnesses.html\" title=\"struct sp_consensus_subspace::GlobalRandomnesses\">GlobalRandomnesses</a>","synthetic":false,"types":["sp_consensus_subspace::GlobalRandomnesses"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"sp_consensus_subspace/struct.SolutionRanges.html\" title=\"struct sp_consensus_subspace::SolutionRanges\">SolutionRanges</a>","synthetic":false,"types":["sp_consensus_subspace::SolutionRanges"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"sp_consensus_subspace/struct.Salts.html\" title=\"struct sp_consensus_subspace::Salts\">Salts</a>","synthetic":false,"types":["sp_consensus_subspace::Salts"]}];
implementors["sp_executor"] = [{"text":"impl TypeInfo for <a class=\"struct\" href=\"sp_executor/struct.BundleHeader.html\" title=\"struct sp_executor::BundleHeader\">BundleHeader</a>","synthetic":false,"types":["sp_executor::BundleHeader"]},{"text":"impl&lt;Extrinsic&gt; TypeInfo for <a class=\"struct\" href=\"sp_executor/struct.Bundle.html\" title=\"struct sp_executor::Bundle\">Bundle</a>&lt;Extrinsic&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Extrinsic&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Extrinsic: TypeInfo + 'static,&nbsp;</span>","synthetic":false,"types":["sp_executor::Bundle"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"sp_executor/struct.OpaqueBundle.html\" title=\"struct sp_executor::OpaqueBundle\">OpaqueBundle</a>","synthetic":false,"types":["sp_executor::OpaqueBundle"]},{"text":"impl&lt;Hash&gt; TypeInfo for <a class=\"struct\" href=\"sp_executor/struct.ExecutionReceipt.html\" title=\"struct sp_executor::ExecutionReceipt\">ExecutionReceipt</a>&lt;Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Hash&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: TypeInfo + 'static,&nbsp;</span>","synthetic":false,"types":["sp_executor::ExecutionReceipt"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"sp_executor/struct.OpaqueExecutionReceipt.html\" title=\"struct sp_executor::OpaqueExecutionReceipt\">OpaqueExecutionReceipt</a>","synthetic":false,"types":["sp_executor::OpaqueExecutionReceipt"]},{"text":"impl TypeInfo for <a class=\"enum\" href=\"sp_executor/enum.ExecutionPhase.html\" title=\"enum sp_executor::ExecutionPhase\">ExecutionPhase</a>","synthetic":false,"types":["sp_executor::ExecutionPhase"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"sp_executor/struct.FraudProof.html\" title=\"struct sp_executor::FraudProof\">FraudProof</a>","synthetic":false,"types":["sp_executor::FraudProof"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"sp_executor/struct.BundleEquivocationProof.html\" title=\"struct sp_executor::BundleEquivocationProof\">BundleEquivocationProof</a>","synthetic":false,"types":["sp_executor::BundleEquivocationProof"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"sp_executor/struct.InvalidTransactionProof.html\" title=\"struct sp_executor::InvalidTransactionProof\">InvalidTransactionProof</a>","synthetic":false,"types":["sp_executor::InvalidTransactionProof"]}];
implementors["subspace_core_primitives"] = [{"text":"impl TypeInfo for <a class=\"enum\" href=\"subspace_core_primitives/objects/enum.BlockObject.html\" title=\"enum subspace_core_primitives::objects::BlockObject\">BlockObject</a>","synthetic":false,"types":["subspace_core_primitives::objects::BlockObject"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"subspace_core_primitives/objects/struct.BlockObjectMapping.html\" title=\"struct subspace_core_primitives::objects::BlockObjectMapping\">BlockObjectMapping</a>","synthetic":false,"types":["subspace_core_primitives::objects::BlockObjectMapping"]},{"text":"impl TypeInfo for <a class=\"enum\" href=\"subspace_core_primitives/objects/enum.PieceObject.html\" title=\"enum subspace_core_primitives::objects::PieceObject\">PieceObject</a>","synthetic":false,"types":["subspace_core_primitives::objects::PieceObject"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"subspace_core_primitives/objects/struct.PieceObjectMapping.html\" title=\"struct subspace_core_primitives::objects::PieceObjectMapping\">PieceObjectMapping</a>","synthetic":false,"types":["subspace_core_primitives::objects::PieceObjectMapping"]},{"text":"impl TypeInfo for <a class=\"enum\" href=\"subspace_core_primitives/objects/enum.GlobalObject.html\" title=\"enum subspace_core_primitives::objects::GlobalObject\">GlobalObject</a>","synthetic":false,"types":["subspace_core_primitives::objects::GlobalObject"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"subspace_core_primitives/struct.PublicKey.html\" title=\"struct subspace_core_primitives::PublicKey\">PublicKey</a>","synthetic":false,"types":["subspace_core_primitives::PublicKey"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"subspace_core_primitives/struct.Signature.html\" title=\"struct subspace_core_primitives::Signature\">Signature</a>","synthetic":false,"types":["subspace_core_primitives::Signature"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"subspace_core_primitives/struct.LocalChallenge.html\" title=\"struct subspace_core_primitives::LocalChallenge\">LocalChallenge</a>","synthetic":false,"types":["subspace_core_primitives::LocalChallenge"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"subspace_core_primitives/struct.Piece.html\" title=\"struct subspace_core_primitives::Piece\">Piece</a>","synthetic":false,"types":["subspace_core_primitives::Piece"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"subspace_core_primitives/struct.FlatPieces.html\" title=\"struct subspace_core_primitives::FlatPieces\">FlatPieces</a>","synthetic":false,"types":["subspace_core_primitives::FlatPieces"]},{"text":"impl TypeInfo for <a class=\"enum\" href=\"subspace_core_primitives/enum.ArchivedBlockProgress.html\" title=\"enum subspace_core_primitives::ArchivedBlockProgress\">ArchivedBlockProgress</a>","synthetic":false,"types":["subspace_core_primitives::ArchivedBlockProgress"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"subspace_core_primitives/struct.LastArchivedBlock.html\" title=\"struct subspace_core_primitives::LastArchivedBlock\">LastArchivedBlock</a>","synthetic":false,"types":["subspace_core_primitives::LastArchivedBlock"]},{"text":"impl TypeInfo for <a class=\"enum\" href=\"subspace_core_primitives/enum.RootBlock.html\" title=\"enum subspace_core_primitives::RootBlock\">RootBlock</a>","synthetic":false,"types":["subspace_core_primitives::RootBlock"]}];
implementors["subspace_runtime"] = [{"text":"impl TypeInfo for <a class=\"struct\" href=\"subspace_runtime/struct.SessionKeys.html\" title=\"struct subspace_runtime::SessionKeys\">SessionKeys</a>","synthetic":false,"types":["subspace_runtime::SessionKeys"]},{"text":"impl TypeInfo for <a class=\"enum\" href=\"subspace_runtime/enum.FeedProcessorKind.html\" title=\"enum subspace_runtime::FeedProcessorKind\">FeedProcessorKind</a>","synthetic":false,"types":["subspace_runtime::FeedProcessorKind"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"subspace_runtime/struct.Runtime.html\" title=\"struct subspace_runtime::Runtime\">Runtime</a>","synthetic":false,"types":["subspace_runtime::Runtime"]},{"text":"impl TypeInfo for <a class=\"enum\" href=\"subspace_runtime/enum.Event.html\" title=\"enum subspace_runtime::Event\">Event</a>","synthetic":false,"types":["subspace_runtime::Event"]},{"text":"impl TypeInfo for <a class=\"enum\" href=\"subspace_runtime/enum.OriginCaller.html\" title=\"enum subspace_runtime::OriginCaller\">OriginCaller</a>","synthetic":false,"types":["subspace_runtime::OriginCaller"]},{"text":"impl TypeInfo for <a class=\"enum\" href=\"subspace_runtime/enum.Call.html\" title=\"enum subspace_runtime::Call\">Call</a>","synthetic":false,"types":["subspace_runtime::Call"]}];
implementors["subspace_test_runtime"] = [{"text":"impl TypeInfo for <a class=\"struct\" href=\"subspace_test_runtime/struct.SessionKeys.html\" title=\"struct subspace_test_runtime::SessionKeys\">SessionKeys</a>","synthetic":false,"types":["subspace_test_runtime::SessionKeys"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"subspace_test_runtime/struct.Runtime.html\" title=\"struct subspace_test_runtime::Runtime\">Runtime</a>","synthetic":false,"types":["subspace_test_runtime::Runtime"]},{"text":"impl TypeInfo for <a class=\"enum\" href=\"subspace_test_runtime/enum.Event.html\" title=\"enum subspace_test_runtime::Event\">Event</a>","synthetic":false,"types":["subspace_test_runtime::Event"]},{"text":"impl TypeInfo for <a class=\"enum\" href=\"subspace_test_runtime/enum.OriginCaller.html\" title=\"enum subspace_test_runtime::OriginCaller\">OriginCaller</a>","synthetic":false,"types":["subspace_test_runtime::OriginCaller"]},{"text":"impl TypeInfo for <a class=\"enum\" href=\"subspace_test_runtime/enum.Call.html\" title=\"enum subspace_test_runtime::Call\">Call</a>","synthetic":false,"types":["subspace_test_runtime::Call"]}];
implementors["substrate_test_runtime"] = [{"text":"impl&lt;T:&nbsp;Config&gt; TypeInfo for <a class=\"enum\" href=\"substrate_test_runtime/system/enum.Call.html\" title=\"enum substrate_test_runtime::system::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>&gt;: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Config + 'static,&nbsp;</span>","synthetic":false,"types":["substrate_test_runtime::system::Call"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"substrate_test_runtime/struct.Runtime.html\" title=\"struct substrate_test_runtime::Runtime\">Runtime</a>","synthetic":false,"types":["substrate_test_runtime::Runtime"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"substrate_test_runtime/struct.Origin.html\" title=\"struct substrate_test_runtime::Origin\">Origin</a>","synthetic":false,"types":["substrate_test_runtime::Origin"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"substrate_test_runtime/struct.Event.html\" title=\"struct substrate_test_runtime::Event\">Event</a>","synthetic":false,"types":["substrate_test_runtime::Event"]},{"text":"impl TypeInfo for <a class=\"struct\" href=\"substrate_test_runtime/struct.SessionKeys.html\" title=\"struct substrate_test_runtime::SessionKeys\">SessionKeys</a>","synthetic":false,"types":["substrate_test_runtime::SessionKeys"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()