import { $TypeOf } from "flow2dts-flow-types-polyfill";
import $2 from "../Components/View/View";
import $1 from "react";
declare type AnimatedComponentType<Props extends {
  readonly [$f2tKey: string]: unknown;
}, Instance> = $1.AbstractComponent<
/*[FLOW2DTS - Warning] This type was a $ObjMap type in the original Flow source.*/
{ [K in keyof Props & Readonly<{
  passthroughAnimatedPropExplicitValues?: $1.ElementConfig<$TypeOf<typeof $2>>;
}>]: ReturnType<() => any> }, Instance>;
declare function createAnimatedComponent<Props extends {
  readonly [$f2tKey: string]: unknown;
}, Instance>(Component: $1.AbstractComponent<Props, Instance>): AnimatedComponentType<Props, Instance>;
export type { AnimatedComponentType };
declare const $f2tExportDefault: $TypeOf<typeof createAnimatedComponent>;
export default $f2tExportDefault;