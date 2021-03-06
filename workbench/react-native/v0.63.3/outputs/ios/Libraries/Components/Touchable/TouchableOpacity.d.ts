import { $TypeOf } from "flow2dts-flow-types-polyfill";
import { $Diff } from "utility-types";
// @flow
import TouchableWithoutFeedback$f2tTypeof from "./TouchableWithoutFeedback";
declare type TouchableWithoutFeedback = $TypeOf<typeof TouchableWithoutFeedback$f2tTypeof>;
import Animated from "../../../Libraries/Animated/src/Animated";
import { ViewStyleProp } from "../../../Libraries/StyleSheet/StyleSheet";
import * as React from "react";
declare type TVProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  hasTVPreferredFocus?: null | undefined | boolean;
  nextFocusDown?: null | undefined | number;
  nextFocusForward?: null | undefined | number;
  nextFocusLeft?: null | undefined | number;
  nextFocusRight?: null | undefined | number;
  nextFocusUp?: null | undefined | number;
}>;
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
React.ElementConfig<TouchableWithoutFeedback> & TVProps & {
  activeOpacity?: null | undefined | number;
  style?: null | undefined | ViewStyleProp;
  hostRef: React.Ref<$TypeOf<typeof Animated.View>>;
}>;
declare const $f2tExportDefault: React.ComponentType<Readonly<$Diff<Props,
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  hostRef: unknown;
}>>>;
export default $f2tExportDefault;