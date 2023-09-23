'use client'

import { usePathname } from 'next/navigation'

import useMediaQuery, { isDesktopQuery } from './useMediaQuery'

export default function useIsPage() {
  const isDesktop = useMediaQuery(isDesktopQuery)
  const pathname = usePathname()

  const paths = ['/contact', '/register']
  const show = paths.includes(pathname)

  return show && !isDesktop
}
