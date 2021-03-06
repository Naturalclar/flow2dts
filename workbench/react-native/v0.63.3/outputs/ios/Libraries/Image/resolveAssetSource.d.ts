import { $TEMPORARY$module$exports$assign, $TypeOf } from "flow2dts-flow-types-polyfill";
import $1 from "./AssetSourceResolver";
import { ResolvedAssetSource } from "./AssetSourceResolver";
declare function setCustomSourceTransformer(transformer: (resolver: $TypeOf<typeof $1>) => ResolvedAssetSource): void;
declare function resolveAssetSource(source: any): null | undefined | ResolvedAssetSource;
declare const $f2tExportDefault: $TEMPORARY$module$exports$assign<$TypeOf<typeof resolveAssetSource>, {
  setCustomSourceTransformer: $TypeOf<typeof setCustomSourceTransformer>;
  pickScale: $TypeOf<typeof $1.pickScale>;
}>;
export default $f2tExportDefault;