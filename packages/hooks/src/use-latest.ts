import type { Fn } from '@seventhse/utils'
import { useRef } from 'react'

export function useLatest(fn: Fn) {
  const latestRef = useRef(fn)

  latestRef.current = fn

  return latestRef
}
