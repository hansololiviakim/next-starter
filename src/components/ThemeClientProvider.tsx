'use client'

import { ThemeProvider, ThemeScript } from '@vapor-ui/core'
import { themeConfig } from '@/lib/theme.config'

export function ThemeClientProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ThemeScript config={themeConfig} />
      <ThemeProvider config={themeConfig}>{children}</ThemeProvider>
    </>
  )
}
