import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Description } from '@/components/ui/description'
import { Heading } from '@/components/ui/heading'
import { Section } from '@/components/common/section'
import Star from '@/components/elements/star'
import Timer from '@/components/elements/timer'
import Underline from '@/components/elements/underline'

export default function Hero() {
  // Timer Date
  const SEVEN_DAYS_IN_MS = new Date('9/23/2023').getTime() + 7 * 24 * 60 * 60 * 1000

  return (
    <Section bottomBorder className="overflow-hidden !pb-0 md:pt-36">
      <div className="container relative grid items-start gap-12 lg:grid-cols-2">
        <Heading
          level={2}
          defaultFont
          className="absolute -top-12 left-1/2 z-50 flex w-fit -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap text-center text-base italic md:-top-20 md:left-[78%] md:gap-2 lg:text-3xl"
        >
          Igniting a Revolution in HR <Underline>Innovation</Underline>
        </Heading>
        <Star className="-top-8 left-20" />
        <Star dim className="right-4 top-0" />
        <Star dim className="right-20 top-60" />

        {/* Content */}
        <div className="mx-auto max-w-[530px] space-y-8 maxLg:text-left">
          <Heading level={1} className="relative z-50 -mb-6 font-semibold md:text-6xl xl:whitespace-nowrap xl:text-7xl">
            getlinked Tech <br /> Hackathon{' '}
            <div className="inline-flex flex-wrap items-center justify-center gap-1">
              <span className="text-primary">1.0</span>
              <Image className="w-fit maxMd:w-[32px]" src="/icons/chain.png" width={86} height={86} alt="Chain Icon" />
              <Image className="w-fit maxMd:w-[32px]" src="/icons/boom.png" width={58} height={58} alt="Boom Icon" />
            </div>
          </Heading>
          <Description className="md:text-xl">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</Description>
          <Button>Register</Button>
          <Timer targetDate={SEVEN_DAYS_IN_MS} />
        </div>

        {/* Image */}
        <picture className="relative isolate mx-auto max-w-[600px]">
          <div className="absolute right-28 top-0 -z-10 aspect-square w-[300px] rounded-full bg-secondary opacity-50 blur-[100px] maxMd:hidden" />
          <Image className="mix-blend-luminosity grayscale" src="/imgs/hero-man.png" width={900} height={750} alt="A Man wearing smart glasses" />
          <Image className="absolute inset-0 mix-blend-hard-light" src="/imgs/hero-globe.png" width={800} height={750} alt="Globe" />
        </picture>
      </div>
    </Section>
  )
}
