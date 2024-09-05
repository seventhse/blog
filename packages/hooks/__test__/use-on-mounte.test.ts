import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useOnMount } from '../src'

describe('useOnMount hook', () => {
  it('should call the function on mount', () => {
    const mockFn = vi.fn() // Create a mock function

    renderHook(() => useOnMount(mockFn))

    // Check if the mock function was called once when the component mounts
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should throw error if non-function argument is passed', () => {
    const invalidValue = 'not a function'

    // Create a function that will use the hook and throw the expected error
    const { result } = renderHook(() => {
      try {
        useOnMount(invalidValue as any)
      }
      catch (error) {
        return error
      }
    })

    // Check if the error matches the expected error message
    expect(result.current).toEqual(new Error('The argument passed to useOnMount must be a function'))
  })
})
