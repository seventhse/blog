import { describe, expect, it } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useFirstMounted } from '../src'

describe('useFirstMounted hook', () => {
  it('should be true on initial mount and false after unmount', () => {
    // Render the hook
    const { result, unmount } = renderHook(() => useFirstMounted())

    // The initial value should be true since the component is mounted
    expect(result.current.current).toBe(true)

    // Unmount the hook to trigger the useUnMount hook logic
    unmount()

    // After unmounting, the value should be false
    expect(result.current.current).toBe(false)
  })
})
