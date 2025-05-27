'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return null

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="size-8 cursor-pointer">
      {resolvedTheme === 'dark'
        ? (
            <Moon className="size-4" />
          )
        : (
            <Sun className="size-4" />
          )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
