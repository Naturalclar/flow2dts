import { $TypeOf } from "flow2dts-flow-types-polyfill";
import $1 from "../DeprecatedPropTypes/DeprecatedTextPropTypes";
import $2 from "react";
import { HostComponent } from "../Renderer/shims/ReactNativeTypes";
import { TextProps } from "./TextProps";
declare type TextStatics = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  propTypes: $TypeOf<typeof $1>;
}>;
declare const $f2tExportDefault: $2.AbstractComponent<TextProps, $2.ElementRef<HostComponent<TextProps>>> & TextStatics;
export default $f2tExportDefault;