'use client'

import { useEffect, useState } from 'react'
import { ChevronsUp } from 'lucide-react'

import { cn } from '@/lib/utils'

const ScrollUp = () => {
  const [showScrollUp, setShowScrollUp] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
  function checkScroll(this: any) {
    this.scrollY >= 200 ? setShowScrollUp(true) : setShowScrollUp(false)
  }

  const ScrollUp = () => window.scrollTo(0, 0)

  useEffect(() => {
    window.addEventListener('scroll', checkScroll)

    return function unMount() {
      window.removeEventListener('scroll', checkScroll)
    }
  }, [])

  return (
    <div
      onClick={ScrollUp}
      className={cn(
        'fixed right-8 z-10 inline-flex cursor-pointer rounded bg-secondary p-1 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-tertiary',
        showScrollUp ? 'bottom-20' : 'bottom-[-20%]'
      )}
    >
      <ChevronsUp size="20" />
    </div>
  )
}

export default ScrollUp
