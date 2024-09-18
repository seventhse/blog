import { useState } from 'react'
import { useOnMount } from './use-on-mount.ts'

export function useMounted() {
  const [mounted, setMounted] = useState(false)

  useOnMount(() => {
    setMounted(true)
  })

  return mounted
}
