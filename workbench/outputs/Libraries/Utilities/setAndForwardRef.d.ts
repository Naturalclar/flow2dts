import { $TypeOf } from "flow2dts-flow-types-polyfill";
// @flow
import { ElementRef } from "react";
import { Ref } from "react";
declare type Args = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  getForwardedRef: () => null | undefined | Ref;
  setLocalRef: (ref: ElementRef) => unknown;
}>;
declare function setAndForwardRef($f2t1: Args) => (ref: ElementRef) => void;
declare const $f2tExportDefault: $TypeOf<typeof setAndForwardRef>;
export default $f2tExportDefault;