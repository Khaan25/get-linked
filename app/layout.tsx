import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'react-hot-toast'

import { cn } from '@/lib/utils'

import './globals.css'

import { ReactNode } from 'react'
import type { Metadata } from 'next'

import { defaultMetadata } from '@/lib/default-metadata'
import { fontClash, fontMontserrat } from '@/lib/font'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/header'

export const metadata: Metadata = {
  ...defaultMetadata,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-montserrat antialiased', fontMontserrat.variable, fontClash.variable)}>
        <NextTopLoader color="#fff" showSpinner={false} />
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
