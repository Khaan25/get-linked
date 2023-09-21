import Image from 'next/image'

import { Section } from '../common/section'
import Star from '../elements/star'
import { Description } from '../ui/description'
import { Heading } from '../ui/heading'

export default function Introduction() {
  return (
    <Section bottomBorder>
      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <Star colored className="left-8 top-8" />
        <Star colored className="right-12 top-32" />

        <picture>
          <Image className="mx-auto" src="/imgs/introduction.png" alt="Bulb with ideas" width={500} height={500} />
        </picture>

        <div className="space-y-4 maxLg:text-center">
          <Heading level={2}>
            Introduction to getlinked <br /> <span className="text-primary">tech Hackathon 1.0</span>
          </Heading>
          <Description>
            Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a coding genius, a design maverick, or a concept wizard,
            you&apos;ll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world,
            that&apos;s what we&apos;re all about!
          </Description>
        </div>
      </div>
    </Section>
  )
}
