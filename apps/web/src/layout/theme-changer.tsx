'use client'

import { useMounted } from '@seventhse/ahooks'
import { cva } from 'class-variance-authority'
import { useTheme } from 'next-themes'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import { cn } from '../utils'

const themeIconVariants = cva('cursor-pointer', {
  variants: {
    status: {
      normal: 'duration-200',
      active: 'text-primary',
    },
  },
  defaultVariants: {
    status: 'normal',
  },
})

const themeIcons = [
  {
    name: 'light',
    Icon: Sun,
  },
  {
    name: 'system',
    Icon: Monitor,
  },
  {
    name: 'dark',
    Icon: Moon,
  },
]

function ThemeChangerInner() {
  const tempMode = useRef('')
  const [visible, setVisible] = useState(false)

  const { theme, systemTheme, setTheme } = useTheme()

  const themeMode = useMemo<'light' | 'dark'>(() => {
    return (theme === 'system' ? systemTheme : theme) as unknown as 'light' | 'dark'
  }, [theme, systemTheme])

  const isDark = useMemo(() => {
    return themeMode === 'dark'
  }, [themeMode])

  const animateStyle = useMemo(() => {
    return {
      backgroundColor: isDark ? '#fdfbfb' : '#434343',
    }
  }, [isDark])

  const changeTheme = (mode: string) => {
    if (mode === themeMode || (mode === 'system' && systemTheme === themeMode)) {
      setTheme(mode)
      return
    }
    setVisible(true)
    tempMode.current = mode
  }

  const animationEnd = () => {
    setTheme(tempMode.current)
    setVisible(false)
  }

  return (
    <>
      <div
        className={cn ('fixed top-0 left-0 w-screen h-screen z-50 hidden animate-slideDown', visible && 'block')}
        style={animateStyle}
        onAnimationEnd={animationEnd}
      />
      <div className="shadow rounded-xl p-1 bg-block">
        <div className="flex items-center gap-x-3 p-2 rounded-xl">
          {
            themeIcons.map((item) => {
              const Icon = item.Icon
              return (
                <span
                  key={item.name}
                  className={themeIconVariants ({
                    status: theme === item.name ? 'active' : 'normal',
                  })}
                  title={item.name}
                >
                  <Icon size={16} onClick={() => changeTheme(item.name)} />
                </span>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export function ThemeChanger() {
  const mounted = useMounted ()

  const innerNode = useMemo (() => {
    if (!mounted) {
      return null
    }
    return <ThemeChangerInner />
  }, [mounted])

  return (
    <div className="w-[100px] flex items-center justify-end">
      {innerNode}
    </div>
  )
}

export default ThemeChanger
