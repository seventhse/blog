import { describe, expect, it } from 'vitest'
import {
  isArray,
  isAsyncFunction,
  isBigInt,
  isBoolean,
  isDate,
  isError,
  isFunction,
  isMap,
  isNull,
  isNumber,
  isObject,
  isPromise,
  isRegExp,
  isSet,
  isString,
  isSymbol,
  isUndefined,
  isWeakMap,
  isWeakSet,
} from '../src'

describe('type Checking Functions', () => {
  it('should correctly identify strings', () => {
    expect(isString('Hello')).toBe(true)
    expect(isString(123)).toBe(false)
  })

  it('should correctly identify numbers', () => {
    expect(isNumber(123)).toBe(true)
    expect(isNumber('123')).toBe(false)
  })

  it('should correctly identify booleans', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
    expect(isBoolean(0)).toBe(false)
  })

  it('should correctly identify null', () => {
    expect(isNull(null)).toBe(true)
    expect(isNull(undefined)).toBe(false)
  })

  it('should correctly identify undefined', () => {
    expect(isUndefined(undefined)).toBe(true)
    expect(isUndefined(null)).toBe(false)
  })

  it('should correctly identify symbols', () => {
    expect(isSymbol(Symbol('test'))).toBe(true)
    expect(isSymbol('symbol')).toBe(false)
  })

  it('should correctly identify bigints', () => {
    expect(isBigInt(BigInt(123))).toBe(true)
    expect(isBigInt(123)).toBe(false)
  })

  it('should correctly identify objects', () => {
    expect(isObject({})).toBe(true)
    expect(isObject(null)).toBe(false)
  })

  it('should correctly identify arrays', () => {
    expect(isArray([])).toBe(true)
    expect(isArray({})).toBe(false)
  })

  it('should correctly identify functions', () => {
    expect(isFunction(() => {})).toBe(true)
    expect(isFunction(123)).toBe(false)
  })

  it('should correctly identify dates', () => {
    expect(isDate(new Date())).toBe(true)
    expect(isDate('2024-09-04')).toBe(false)
  })

  it('should correctly identify regular expressions', () => {
    expect(isRegExp(/abc/)).toBe(true)
    expect(isRegExp('abc')).toBe(false)
  })

  it('should correctly identify errors', () => {
    // eslint-disable-next-line unicorn/error-message
    expect(isError(new Error())).toBe(true)
    expect(isError({})).toBe(false)
  })

  it('should correctly identify maps', () => {
    expect(isMap(new Map())).toBe(true)
    expect(isMap({})).toBe(false)
  })

  it('should correctly identify sets', () => {
    expect(isSet(new Set())).toBe(true)
    expect(isSet([])).toBe(false)
  })

  it('should correctly identify weak maps', () => {
    expect(isWeakMap(new WeakMap())).toBe(true)
    expect(isWeakMap(new Map())).toBe(false)
  })

  it('should correctly identify weak sets', () => {
    expect(isWeakSet(new WeakSet())).toBe(true)
    expect(isWeakSet(new Set())).toBe(false)
  })

  it('should correctly identify promises', () => {
    expect(isPromise(Promise.resolve())).toBe(true)
    expect(isPromise({})).toBe(false)
  })

  it('should correctly identify async functions', () => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const asyncFunc = async () => {
      return 'ddd'
    }
    expect(isAsyncFunction(asyncFunc)).toBe(true)
    expect(isAsyncFunction(() => {})).toBe(false)
  })
})
