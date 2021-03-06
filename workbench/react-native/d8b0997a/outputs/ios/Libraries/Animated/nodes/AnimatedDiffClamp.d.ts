import { $TypeOf } from "flow2dts-flow-types-polyfill";
import $2 from "./AnimatedInterpolation";
import $3 from "./AnimatedNode";
import $4 from "./AnimatedWithChildren";
import { InterpolationConfigType } from "./AnimatedInterpolation";
declare class AnimatedDiffClamp extends $4 {
  constructor(a: $TypeOf<typeof $3>, min: number, max: number);
  __makeNative(): void;
  interpolate(config: InterpolationConfigType): $TypeOf<typeof $2>;
  __getValue(): number;
  __attach(): void;
  __detach(): void;
  __getNativeConfig(): any;
}
export default AnimatedDiffClamp;