import { Metadata } from 'next'

import { siteConfig } from './config'

export const defaultMetadata: Metadata = {
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: 'Zia Ur Rehman Khan', url: 'https://zzia.vercel.app' }],
  referrer: 'origin',
  colorScheme: 'dark light',
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: 'index, follow',
  keywords: siteConfig.keywords,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
  icons: {
    icon: [{ url: '/favicon.ico' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage.image,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    title: siteConfig.name,
    description: siteConfig.description,
    site: siteConfig.url,
    card: 'summary_large_image',
    creator: '@zia_webdev',
    images: [
      {
        url: siteConfig.ogImage.image,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: siteConfig.name,
      },
    ],
  },
}
