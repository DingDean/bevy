window.SIDEBAR_ITEMS = {"enum":[["AssetEvent","Events that involve assets of type `T`."],["AssetIoError","Errors that occur while loading assets."],["AssetLifecycleEvent","Events for the [`AssetLifecycleChannel`]."],["AssetServerError","Errors that occur while loading assets with an `AssetServer`."],["AssetStage","The names of asset stages in an [`App`] schedule."],["FileType","A enum representing a type of file."],["HandleId","A unique, stable asset id."],["LoadState","The load state of an asset."]],"fn":[["filesystem_watcher_system","Watches for file changes in the local file system."],["free_unused_assets_system","A system for freeing assets that have no active handles."],["update_asset_storage_system","Updates the [`Assets`] collection according to the changes queued up by [`AssetServer`]."]],"macro":[["load_internal_asset","Loads an internal asset."],["load_internal_binary_asset","Loads an internal binary asset."]],"mod":[["debug_asset_server","Support for hot reloading internal assets."],["diagnostic","Diagnostic providers for `bevy_diagnostic`."],["prelude","The `bevy_asset` prelude."]],"struct":[["AssetLifecycleChannel","An event channel used by asset server to update the asset storage of a `T` asset."],["AssetMeta","Metadata for an asset."],["AssetPath","Represents a path to an asset in the file system."],["AssetPathId","An unique identifier to an asset path."],["AssetPlugin","Adds support for Assets to an App."],["AssetResult","The result of loading an asset of type `T`."],["AssetServer","Loads assets from the filesystem in the background."],["AssetServerInternal","Internal data for the asset server."],["Assets","Stores Assets of a given type and tracks changes to them."],["Error","The `Error` type, a wrapper around a dynamic error type."],["FileAssetIo","I/O implementation for the local filesystem."],["Handle","A handle into a specific [`Asset`] of type `T`."],["HandleUntyped","A non-generic version of [`Handle`]."],["LabelId","An unique identifier to a sub-asset label."],["LoadContext","An asynchronous context where an [`Asset`] is processed."],["LoadedAsset","A complete asset processed in an [`AssetLoader`]."],["Metadata","Metadata information about a file."],["ReflectAsset","Type data for the `TypeRegistry` used to operate on reflected [`Asset`]s."],["ReflectHandle","Reflect type data struct relating a [`Handle<T>`] back to the `T` asset type."],["SourceInfo","Information about an asset source, such as its path, load state and asset metadata."],["SourceMeta","Metadata for an asset source."],["SourcePathId","An unique identifier to the source path of an asset."]],"trait":[["AddAsset","[`App`] extension methods for adding new asset types."],["Asset","An essential piece of data of an application."],["AssetDynamic","An untyped version of the [`Asset`] trait."],["AssetIo","A storage provider for an `AssetServer`."],["AssetLifecycle","A trait for sending lifecycle notifications from assets in the asset server."],["AssetLoader","A loader for an asset source."]],"type":[["BoxedFuture","An owned and dynamically typed Future used when you can’t statically type your result or need to add some indirection."]]};