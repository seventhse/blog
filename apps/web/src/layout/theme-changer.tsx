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
  const [visibleMask, setVisibleMask] = useState(false)

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

  const ActiveIcon = useMemo(() => {
    return themeIcons.find(item => item.name === theme)!.Icon
  }, [theme])

  const changeTheme = (mode: string) => {
    setVisible(false)
    if (mode === themeMode || (mode === 'system' && systemTheme === themeMode)) {
      setTheme(mode)
      return
    }
    setVisibleMask(true)
    tempMode.current = mode
  }

  const animationEnd = () => {
    setTheme(tempMode.current)
    setVisibleMask(false)
  }

  return (
    <>
      <div
        className={cn ('fixed top-0 left-0 w-screen h-screen z-50 hidden animate-slideDown', visibleMask && 'block')}
        style={animateStyle}
        onAnimationEnd={animationEnd}
      />
      {
        visible && (
          <div
            className="fixed z-10 top-0 left-0 w-screen h-screen"
            onClick={() => {
              setVisible(false)
            }}
          />
        )
      }
      <div className="relative shadow rounded-xl bg-block">
        <div
          className="cursor-pointer p-2 rounded-xl"
          onClick={() => {
            setVisible (pre => !pre)
          }}
        >
          <span className={themeIconVariants ({ status: 'active' })}>
            <ActiveIcon size={16} />
          </span>
        </div>

        <div
          className={
            cn(
              'absolute z-20 flex-col gap-y-3 top-[42px] left-0 bg-page rounded-xl p-2',
              visible
                ? 'flex'
                : 'hidden',
            )
          }
        >
          {
            themeIcons.map ((item) => {
              const Icon = item.Icon
              return (
                <span
                  key={item.name}
                  className={themeIconVariants ({
                    status: theme === item.name
                      ? 'active'
                      : 'normal',
                  })}
                  title={item.name}
                >
                  <Icon size={16} onClick={() => changeTheme (item.name)} />
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
    <div className="w-[36px] flex items-center justify-end">
      {innerNode}
    </div>
  )
}

export default ThemeChanger
