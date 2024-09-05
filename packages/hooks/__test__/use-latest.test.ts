import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useLatest } from '../src'

function fn1() {
  return 'fn1'
}
function fn2() {
  return 'fn2'
}

describe('useLatest hook', () => {
  it('should return the latest function reference', () => {
    const { result, rerender } = renderHook(({ fn }) => useLatest(fn), {
      initialProps: { fn: fn1 },
    })

    expect(result.current.current).toBe(fn1)

    rerender({ fn: fn2 })

    expect(result.current.current).toBe(fn2)
  })
})
