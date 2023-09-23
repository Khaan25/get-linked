import Image from 'next/image'

import { Section } from '../common/section'
import Star from '../elements/star'
import { Slide } from '../Slide'
import { Description } from '../ui/description'
import { Heading } from '../ui/heading'

export default function Rules() {
  return (
    <Section bottomBorder className="lg:py-4">
      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <div className="absolute left-0 top-0 z-[-1] aspect-square w-[200px] rounded-full bg-secondary blur-[60px] lg:left-28 lg:top-28 lg:w-[350px] lg:opacity-50" />
        <div className="absolute -right-8 top-80 z-[-1] aspect-square w-[200px] rounded-full bg-secondary opacity-50 blur-[60px] lg:-right-28 lg:top-44 lg:w-[350px]" />
        <Star className="left-8 top-80 lg:hidden" />
        <Star dim className="right-8 top-96 lg:left-72 lg:top-32" />
        <Star className="bottom-0 left-8 lg:bottom-32 lg:left-1/2" />

        <Slide>
          <div className="space-y-4 maxLg:order-2 maxLg:text-center">
            <Heading level={2}>
              Rules and <br /> <span className="text-primary">Guidelines</span>
            </Heading>
            <Description>
              Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a coding genius, a design maverick, or a concept wizard,
              you&apos;ll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world,
              that&apos;s what we&apos;re all about!
            </Description>
          </div>
        </Slide>

        <Slide delay={0.25}>
          <picture>
            <Image src="/imgs/rules-image.png" alt="Person sitting on chair" width={800} height={800} />
          </picture>
        </Slide>
      </div>
    </Section>
  )
}
