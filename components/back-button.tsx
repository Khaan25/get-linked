'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'

import useIsPage from '@/hooks/useIsPage'

export default function BackButton() {
  const isPage = useIsPage()
  const router = useRouter()

  return (
    isPage && (
      <button onClick={() => router.back()} className="absolute -top-12 rounded-full bg-gradient-to-t from-primary to-secondary p-0.5">
        <ChevronLeft className="flex rounded-full bg-background p-0.5" />
      </button>
    )
  )
}
