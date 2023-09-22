'use client'

import { useState } from 'react'
import Link from 'next/link'
import { menu } from '@/constant/menu'
import { motion } from 'framer-motion'

import useMediaQuery from '@/hooks/useMediaQuery'

import { Button } from '../ui/button'
import { Icons } from './icons'

const menuVariant = {
  hidden: { x: '100%' },
  show: { x: '0%' },
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const isLargeDevice = useMediaQuery('(min-width: 768px)')

  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav aria-label="Main Navigation" className="flex items-center justify-between gap-8">
      <Link href="/" className="block">
        <Icons.logo className="maxMd:w-[100px]" />
      </Link>

      <div className="flex items-center gap-4 maxMd:flex-row-reverse">
        <button aria-label="Open Menu" className="md:hidden" onClick={openMenu}>
          <Icons.menu />
        </button>

        <div className="flex items-center gap-12">
          <motion.div
            layout
            variants={menuVariant}
            initial="hidden"
            animate={isLargeDevice ? 'show' : isOpen ? 'show' : 'hidden'}
            className="relative md:flex md:gap-x-4 maxMd:fixed maxMd:left-0 maxMd:top-0 maxMd:flex maxMd:h-screen maxMd:w-full maxMd:flex-col maxMd:items-start maxMd:gap-4 maxMd:bg-background maxMd:p-12 maxMd:pt-32 maxMd:shadow-[0_-1px_4px_rgba(14,55,63,.15)]"
          >
            <button aria-label="Close Menu" onClick={closeMenu} className="absolute right-[1rem] top-[1.4rem] md:hidden">
              <Icons.close />
            </button>

            <ul className="flex w-full gap-4 md:items-center md:gap-8 maxMd:flex-col">
              {menu.map((m) => (
                <li key={m.title}>
                  <Link onClick={closeMenu} href={m.href} className="hover:text-white/80">
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>

            <Link href="/register" className="whitespace-nowrap md:hidden maxMd:order-1">
              <Button>Register</Button>
            </Link>
          </motion.div>

          <Link href="/register" className="whitespace-nowrap maxMd:order-1 maxMd:hidden">
            <Button>Register</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
