import { describe, expect, it } from 'vitest'
import { safeArray } from '../src'

describe('safeArray', () => {
  it('should return an empty array for null', () => {
    const result = safeArray<number>(null)
    expect(result).toEqual([])
  })

  it('should return an empty array for undefined', () => {
    const result = safeArray<number>(undefined)
    expect(result).toEqual([])
  })

  it('should wrap a non-array value in an array', () => {
    const result = safeArray(42)
    expect(result).toEqual([42])
  })

  it('should return the same array if already an array', () => {
    const array = [1, 2, 3]
    const result = safeArray(array)
    expect(result).toBe(array)
  })

  it('should work with strings', () => {
    const result = safeArray('test')
    expect(result).toEqual(['test'])
  })

  it('should work with boolean values', () => {
    const resultTrue = safeArray(true)
    const resultFalse = safeArray(false)
    expect(resultTrue).toEqual([true])
    expect(resultFalse).toEqual([false])
  })

  it('should infer the correct type', () => {
    const result = safeArray(42)
    expect(result[0]).toBeTypeOf('number')
  })

  it('should handle mixed types correctly', () => {
    const array = [42, 'test', true]
    const result = safeArray(array)
    expect(result).toEqual(array)
  })
})
