import { $TypeOf } from "flow2dts-flow-types-polyfill";
// @flow
import { ExceptionData } from "./NativeExceptionsManager";
declare class SyntheticError extends Error {
  name: string;
}
declare type ExceptionDecorator = ($f2t1: ExceptionData) => ExceptionData;
declare function unstable_setExceptionDecorator(exceptionDecorator: null | undefined | ExceptionDecorator): void;
declare function handleException(e: unknown, isFatal: boolean): void;
declare function installConsoleErrorReporter(): void;
declare namespace $f2tExportDefaultRedirect {
  export const $f2tHidden_handleException: $TypeOf<typeof handleException>;
  export const $f2tHidden_installConsoleErrorReporter: $TypeOf<typeof installConsoleErrorReporter>;
  export const $f2tHidden_SyntheticError: $TypeOf<typeof SyntheticError>;
  export const $f2tHidden_unstable_setExceptionDecorator: $TypeOf<typeof unstable_setExceptionDecorator>;
}
declare namespace $f2tExportDefault {
  export const handleException: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_handleException>;
  export type handleException = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_handleException>;
  export const installConsoleErrorReporter: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_installConsoleErrorReporter>;
  export type installConsoleErrorReporter = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_installConsoleErrorReporter>;
  export const SyntheticError: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_SyntheticError>;
  export type SyntheticError = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_SyntheticError>;
  export const unstable_setExceptionDecorator: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_unstable_setExceptionDecorator>;
  export type unstable_setExceptionDecorator = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_unstable_setExceptionDecorator>;
}
export default $f2tExportDefault;