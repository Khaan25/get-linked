'use client'

import { cn } from '@/lib/utils'
import useIsPage from '@/hooks/useIsPage'

import Navigation from './navigation'

export default function Header() {
  const isPage = useIsPage()

  if (isPage) return null

  return (
    <header aria-label="Header" className="paddingX relative z-[100] border-b border-border/20 py-4 md:py-6">
      <div className="container">
        <div
          className={cn(
            'pointer-events-none absolute left-0 top-20 z-[-1] aspect-square w-[200px] select-none rounded-full bg-secondary opacity-50 blur-[60px] md:left-80 md:top-0 md:w-[350px] md:blur-[100px]',
            !isPage && 'md:-left-16 md:top-64'
          )}
        />

        <Navigation />
      </div>
    </header>
  )
}
