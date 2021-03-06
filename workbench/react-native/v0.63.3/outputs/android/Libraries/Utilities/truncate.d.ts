import { $TypeOf } from "flow2dts-flow-types-polyfill";
// @flow
declare type truncateOptions = {
  breakOnWords: boolean;
  minDelta: number;
  elipsis: string;
};
declare var truncate: (str: null | undefined | string, maxChars: number, options?: truncateOptions) => null | undefined | string;
declare const $f2tExportDefault: $TypeOf<typeof truncate>;
export default $f2tExportDefault;