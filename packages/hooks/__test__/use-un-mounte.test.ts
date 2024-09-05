import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useUnMount } from '../src'

describe('useUnMount hook', () => {
  it('should call the function on unmount', () => {
    const mockFn = vi.fn() // Create a mock function

    // Render the hook
    const { unmount } = renderHook(() => useUnMount(mockFn))

    // Unmount the hook to trigger the cleanup function
    unmount()

    // Check if the mock function was called when unmounting
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should throw error if non-function argument is passed', () => {
    const invalidValue = 'not a function'

    // Render the hook and catch the thrown error
    const { result } = renderHook(() => {
      try {
        useUnMount(invalidValue as any)
      }
      catch (error) {
        return error
      }
    })

    // Check if the error matches the expected message
    expect(result.current).toEqual(new Error('The argument passed to useUnMount must be a function.'))
  })
})
