import { expectType } from "tsd"
import { $TypeOf, $TEMPORARY$module$exports$assign } from "./index"

declare const ANY: any

// $TypeOf: with a value returns the type of the value
declare const SomeValue: { foo: boolean }
expectType<{ foo: boolean }>(ANY as $TypeOf<typeof SomeValue>)
// $TypeOf: with a class returns the class
declare class SomeClass {
  static foo: string
}
expectType<SomeClass>(ANY as $TypeOf<typeof SomeClass>)
// $TypeOf: with a class can be used to access static members
expectType<string>((ANY as $TypeOf<typeof SomeClass>).foo)

declare const Exports: $TEMPORARY$module$exports$assign<typeof SomeValue, { bar: number }>
expectType<typeof SomeValue & { bar: number }>(Exports)
