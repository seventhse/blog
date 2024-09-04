import type { Fn } from './types.ts'

const objectToString = Object.prototype.toString

export type JsType =
  | 'String'
  | 'Number'
  | 'Boolean'
  | 'Null'
  | 'Undefined'
  | 'Symbol'
  | 'BigInt'
  | 'Object'
  | 'Array'
  | 'Function'
  | 'Date'
  | 'RegExp'
  | 'Error'
  | 'Map'
  | 'Set'
  | 'WeakMap'
  | 'WeakSet'
  | 'Promise'
  | 'AsyncFunction'
  | 'Arguments'

export function is<T>(type: JsType) {
  return (val: unknown): val is T => {
    return objectToString.call(val) === `[object ${type}]`
  }
}

export const isString = is<string>('String')
export const isNumber = is<number>('Number')
export const isBoolean = is<boolean>('Boolean')
export const isNull = is<null>('Null')
export const isUndefined = is<undefined>('Undefined')
export const isSymbol = is<symbol>('Symbol')
export const isBigInt = is<bigint>('BigInt')
export const isObject = is<object>('Object')
export const isArray = is<any[]>('Array')
export const isFunction = is<Fn>('Function')
export const isDate = is<Date>('Date')
export const isRegExp = is<RegExp>('RegExp')
export const isError = is<Error>('Error')
export const isMap = is<Map<any, any>>('Map')
export const isSet = is<Set<any>>('Set')
export const isWeakMap = is<WeakMap<object, any>>('WeakMap')
export const isWeakSet = is<WeakSet<object>>('WeakSet')
export const isPromise = is<Promise<any>>('Promise')
export const isAsyncFunction = is<() => Promise<any>>('AsyncFunction')
