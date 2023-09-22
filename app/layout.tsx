import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'react-hot-toast'

import { cn } from '@/lib/utils'

import './globals.css'

import type { Metadata } from 'next'
import { ReactNode } from 'react'

import Footy from '@/components/common/footy'
import Header from '@/components/common/header'
import SkipToMain from '@/components/common/skip-to-main'
import { defaultMetadata } from '@/lib/default-metadata'
import { fontClash, fontMontserrat, fontUnicaOne } from '@/lib/font'

export const metadata: Metadata = {
  ...defaultMetadata,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const skipToContentID = 'main-content'

  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-montserrat antialiased', fontMontserrat.variable, fontClash.variable, fontUnicaOne.variable)}>
        <NextTopLoader color="#fff" showSpinner={false} />
        <SkipToMain content={skipToContentID} />
        <Header />
        <main id={skipToContentID}>{children}</main>
        <Footy />
        <Toaster />
      </body>
    </html>
  )
}
