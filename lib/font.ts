import { Montserrat, Unica_One } from 'next/font/google'
import localFont from 'next/font/local'

export const fontMontserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const fontUnicaOne = Unica_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-unica-one',
})

export const fontClash = localFont({
  variable: '--font-clash',
  src: [
    {
      path: '../public/fonts/ClashDisplay-Extralight.woff2',
      weight: '200',
      style: 'extra-light',
    },
    {
      path: '../public/fonts/ClashDisplay-Light.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: '../public/fonts/ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashDisplay-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})
