import { $TypeOf } from "flow2dts-flow-types-polyfill";
// @flow
import * as React from "react";
import { Stack } from "../Data/LogBoxSymbolication";
import LogBoxLog$f2tTypeof from "../Data/LogBoxLog";
declare type LogBoxLog = $TypeOf<typeof LogBoxLog$f2tTypeof>;
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  log: LogBoxLog;
  onRetry: () => void;
}>;
declare function getCollapseMessage(stackFrames: Stack, collapsed: boolean): string;
declare function LogBoxInspectorStackFrames(props: Props): React.Node;
export { getCollapseMessage };
declare const $f2tExportDefault: $TypeOf<typeof LogBoxInspectorStackFrames>;
export default $f2tExportDefault;