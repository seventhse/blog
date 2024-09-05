import { useRef } from 'react'
import { useUnMount } from './use-un-mount.ts'

export function useFirstMounted() {
  const firstMounted = useRef(true)

  useUnMount(() => {
    firstMounted.current = false
  })

  return firstMounted
}
