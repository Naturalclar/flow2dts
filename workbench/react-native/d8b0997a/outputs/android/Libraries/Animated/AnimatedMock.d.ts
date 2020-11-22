import { $TypeOf } from "flow2dts-flow-types-polyfill";
import $1 from "./AnimatedEvent";
import $9 from "./AnimatedEvent";
import $3 from "./AnimatedImplementation";
import $4 from "./nodes/AnimatedInterpolation";
import $5 from "./nodes/AnimatedNode";
import $6 from "./nodes/AnimatedProps";
import $7 from "./nodes/AnimatedValue";
import $8 from "./nodes/AnimatedValueXY";
import $11 from "./createAnimatedComponent";
import { EndCallback } from "./animations/Animation";
import { TimingAnimationConfig } from "./animations/TimingAnimation";
import { DecayAnimationConfig } from "./animations/DecayAnimation";
import { SpringAnimationConfig } from "./animations/SpringAnimation";
import { Mapping } from "./AnimatedEvent";
import { EventConfig } from "./AnimatedEvent";
declare type CompositeAnimation = {
  start: (callback?: null | undefined | EndCallback) => void;
  stop: () => void;
  reset: () => void;
  _startNativeLoop: (iterations?: number) => void;
  _isUsingNativeDriver: () => boolean;
};
declare var spring: (value: $TypeOf<typeof $7> | $TypeOf<typeof $8>, config: SpringAnimationConfig) => CompositeAnimation;
declare var timing: (value: $TypeOf<typeof $7> | $TypeOf<typeof $8>, config: TimingAnimationConfig) => CompositeAnimation;
declare var decay: (value: $TypeOf<typeof $7> | $TypeOf<typeof $8>, config: DecayAnimationConfig) => CompositeAnimation;
declare var sequence: (animations: CompositeAnimation[]) => CompositeAnimation;
declare type ParallelConfig = {
  stopTogether?: boolean;
};
declare var parallel: (animations: CompositeAnimation[], config?: null | undefined | ParallelConfig) => CompositeAnimation;
declare var delay: (time: number) => CompositeAnimation;
declare var stagger: (time: number, animations: CompositeAnimation[]) => CompositeAnimation;
declare type LoopAnimationConfig = {
  iterations: number;
  resetBeforeIteration?: boolean;
};
declare var loop: (animation: CompositeAnimation, _?: LoopAnimationConfig) => CompositeAnimation;
declare var event: (argMapping: (null | undefined | Mapping)[], config: EventConfig) => any;
export type { CompositeAnimation };
declare namespace $f2tExportDefaultRedirect {
  export const $f2tHidden_Value: $TypeOf<typeof $7>;
  export const $f2tHidden_ValueXY: $TypeOf<typeof $8>;
  export const $f2tHidden_Interpolation: $TypeOf<typeof $4>;
  export const $f2tHidden_Node: $TypeOf<typeof $5>;
  export const $f2tHidden_decay: $TypeOf<typeof decay>;
  export const $f2tHidden_timing: $TypeOf<typeof timing>;
  export const $f2tHidden_spring: $TypeOf<typeof spring>;
  export const $f2tHidden_add: $TypeOf<typeof $3.add>;
  export const $f2tHidden_subtract: $TypeOf<typeof $3.subtract>;
  export const $f2tHidden_divide: $TypeOf<typeof $3.divide>;
  export const $f2tHidden_multiply: $TypeOf<typeof $3.multiply>;
  export const $f2tHidden_modulo: $TypeOf<typeof $3.modulo>;
  export const $f2tHidden_diffClamp: $TypeOf<typeof $3.diffClamp>;
  export const $f2tHidden_delay: $TypeOf<typeof delay>;
  export const $f2tHidden_sequence: $TypeOf<typeof sequence>;
  export const $f2tHidden_parallel: $TypeOf<typeof parallel>;
  export const $f2tHidden_stagger: $TypeOf<typeof stagger>;
  export const $f2tHidden_loop: $TypeOf<typeof loop>;
  export const $f2tHidden_event: $TypeOf<typeof event>;
  export const $f2tHidden_createAnimatedComponent: $TypeOf<typeof $11>;
  export const $f2tHidden_attachNativeEvent: $TypeOf<typeof $9.attachNativeEvent>;
  export const $f2tHidden_forkEvent: $TypeOf<typeof $3.forkEvent>;
  export const $f2tHidden_unforkEvent: $TypeOf<typeof $3.unforkEvent>;
  export const $f2tHidden_Event: $TypeOf<typeof $1.AnimatedEvent>;
  export const $f2tHidden___PropsOnlyForTests: $TypeOf<typeof $6>;
}
declare namespace $f2tExportDefault {
  export const Value: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_Value>;
  export type Value = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_Value>;
  export const ValueXY: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_ValueXY>;
  export type ValueXY = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_ValueXY>;
  export const Interpolation: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_Interpolation>;
  export type Interpolation = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_Interpolation>;
  export const Node: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_Node>;
  export type Node = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_Node>;
  export const decay: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_decay>;
  export type decay = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_decay>;
  export const timing: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_timing>;
  export type timing = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_timing>;
  export const spring: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_spring>;
  export type spring = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_spring>;
  export const add: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_add>;
  export type add = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_add>;
  export const subtract: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_subtract>;
  export type subtract = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_subtract>;
  export const divide: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_divide>;
  export type divide = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_divide>;
  export const multiply: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_multiply>;
  export type multiply = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_multiply>;
  export const modulo: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_modulo>;
  export type modulo = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_modulo>;
  export const diffClamp: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_diffClamp>;
  export type diffClamp = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_diffClamp>;
  export const delay: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_delay>;
  export type delay = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_delay>;
  export const sequence: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_sequence>;
  export type sequence = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_sequence>;
  export const parallel: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_parallel>;
  export type parallel = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_parallel>;
  export const stagger: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_stagger>;
  export type stagger = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_stagger>;
  export const loop: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_loop>;
  export type loop = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_loop>;
  export const event: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_event>;
  export type event = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_event>;
  export const createAnimatedComponent: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_createAnimatedComponent>;
  export type createAnimatedComponent = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_createAnimatedComponent>;
  export const attachNativeEvent: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_attachNativeEvent>;
  export type attachNativeEvent = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_attachNativeEvent>;
  export const forkEvent: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_forkEvent>;
  export type forkEvent = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_forkEvent>;
  export const unforkEvent: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_unforkEvent>;
  export type unforkEvent = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_unforkEvent>;
  export const Event: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_Event>;
  export type Event = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_Event>;
  export const __PropsOnlyForTests: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden___PropsOnlyForTests>;
  export type __PropsOnlyForTests = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden___PropsOnlyForTests>;
}
export default $f2tExportDefault;