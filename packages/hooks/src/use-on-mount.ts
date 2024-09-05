import { isFunction } from '@seventhse/utils'
import type { Fn } from '@seventhse/utils'
import { useEffect } from 'react'
import { useLatest } from './use-latest.ts'

export function useOnMount(fn: Fn) {
  if (!isFunction(fn)) {
    throw new Error('The argument passed to useOnMount must be a function')
  }

  const latestFn = useLatest(fn)

  useEffect(() => {
    latestFn.current?.()
  }, [])
}
