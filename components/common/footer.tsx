import Link from 'next/link'

import { Description } from '../ui/description'
import { Heading } from '../ui/heading'
import { Icons } from './icons'

export default function Footer() {
  const links = ['Overview', 'Timeline', 'FAQs', 'Register']

  return (
    <footer className="paddingX bg-[#100B20] pb-8 pt-16">
      <div className="container">
        <div className="grid items-start justify-between gap-16 min968:grid-cols-[.6fr,.4fr]">
          <div className="flex flex-col gap-4 maxSm:mt-6 min968:max-w-lg">
            <Link href="/" className="block">
              <Icons.logo className="maxMd:w-[100px]" />
            </Link>
            <Description>Der ultimative Leitfaden für den Start Ihrer Karriere als unabhängiger Softwareentwickler im Jahr 2023</Description>
          </div>

          <div className="grid grid-cols-2 gap-16 sm:gap-12">
            <div>
              <Heading level={2} className="mb-6 text-sm font-semibold uppercase tracking-widest max360:text-xs">
                Useful Links
              </Heading>
              <ul className="space-y-4" aria-label="Links Links">
                {links.map((link, index) => (
                  <li>
                    <Link key={index} target="_self" className="inline-block text-base font-normal underline-offset-4 hover:underline max360:text-sm" href="/">
                      {link}
                    </Link>
                  </li>
                ))}

                <li className="flex items-center gap-4">
                  <span className="whitespace-nowrap font-semibold text-primary">Follow Us</span>
                  <div className="flex items-center gap-4">
                    <Link href="/" target="_blank">
                      <Icons.instagram />
                    </Link>
                    <Link href="/" target="_blank">
                      <Icons.x />
                    </Link>
                    <Link href="/" target="_blank">
                      <Icons.facebook />
                    </Link>
                    <Link href="/" target="_blank">
                      <Icons.linkedin />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <Heading level={2} className="mb-6 text-sm font-semibold uppercase tracking-widest max360:text-xs">
                Contact Us
              </Heading>
              <ul className="space-y-4" aria-label="Links Links">
                <li>
                  <Link target="_blank" className="inline-flex items-start gap-2 text-base font-normal underline-offset-4 hover:underline max360:text-sm" href="/">
                    <Icons.phone />
                    <span className="-mt-1">+234 6707653444</span>
                  </Link>
                </li>
                <li>
                  <Link target="_blank" className="inline-flex items-start gap-2 text-base font-normal underline-offset-4 hover:underline max360:text-sm" href="/">
                    <Icons.location />
                    <address className="-mt-1">27,Alara Street Yaba 100012 Lagos State</address>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12 mt-4 flex items-center justify-between gap-4 min968:-mt-7">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:underline hover:underline-offset-4">
              Terms of Use
            </Link>
            <span className="text-primary">|</span>
            <Link href="/" className="hover:underline hover:underline-offset-4">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-start min968:justify-center">
          <span className="block text-xs maxSm:text-center">ZiaCodes All rights reserved. © getlinked Ltd.</span>
        </div>
      </div>
    </footer>
  )
}
