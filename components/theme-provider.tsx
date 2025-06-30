'use client'

import * as React from 'react'
import { useState, useEffect } from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a shell that matches the light theme to prevent hydration mismatch
    return <div suppressHydrationWarning>{children}</div>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
