import { $TEMPORARY$module$exports$assign, $TypeOf } from "flow2dts-flow-types-polyfill";
// @flow
declare type LogListeners =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  readonly onDifferentFunctionsIgnored: (nameOne: null | undefined | string, nameTwo: null | undefined | string) => void;
};
declare type Options =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  readonly unsafelyIgnoreFunctions?: boolean;
};
declare function unstable_setLogListeners(listeners: null | undefined | LogListeners): void;
declare var deepDiffer: (one: any, two: any, maxDepthOrOptions?: Options | number, maybeOptions?: Options) => boolean;
declare const $f2tExportDefault: $TEMPORARY$module$exports$assign<$TypeOf<typeof deepDiffer>, {
  unstable_setLogListeners: $TypeOf<typeof unstable_setLogListeners>;
}>;
export default $f2tExportDefault;