import { $TypeOf } from "flow2dts-flow-types-polyfill";
// @flow
declare type OnSuccessCallback = (left: number, top: number, width: number, height: number, pageX: number, pageY: number) => void;
declare type OnErrorCallback = (error: any) => void;
declare var queryLayoutByID: (tag: null | undefined | number, onError: OnErrorCallback, onSuccess: OnSuccessCallback) => void;
declare const $f2tExportDefault: $TypeOf<typeof queryLayoutByID>;
export default $f2tExportDefault;