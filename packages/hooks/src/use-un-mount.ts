import type { Fn } from '@seventhse/utils'
import { isFunction } from '@seventhse/utils'
import { useEffect } from 'react'
import { useLatest } from './use-latest.ts'

export function useUnMount(fn: Fn) {
  if (!isFunction(fn)) {
    throw new Error('The argument passed to useUnMount must be a function.')
  }

  const latestFn = useLatest(fn)

  useEffect(() => {
    return latestFn.current
  }, [])
}
