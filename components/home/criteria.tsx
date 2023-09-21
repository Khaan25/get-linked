import Image from 'next/image'
import { criteria } from '@/constant/criteria'

import { Section } from '../common/section'
import Star from '../elements/star'
import { Description } from '../ui/description'
import { Heading } from '../ui/heading'

export default function Criteria() {
  return (
    <Section bottomBorder>
      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <div className="absolute left-0 top-0 z-[-1] aspect-square w-[200px] rounded-full bg-secondary blur-[60px] lg:left-28 lg:top-28 lg:w-[350px] lg:opacity-50" />
        <div className="absolute -right-8 top-80 z-[-1] aspect-square w-[200px] rounded-full bg-secondary opacity-50 blur-[60px] lg:-right-28 lg:top-44 lg:w-[350px]" />
        <Star className="left-8 top-80 lg:hidden" />
        <Star dim className="right-8 top-96 lg:left-72 lg:top-32" />
        <Star className="bottom-0 left-8 lg:bottom-32 lg:left-1/2" />

        <div className="order-2 space-y-4 maxLg:text-center">
          <Heading level={2}>
            Judging Criteria
            <br /> <span className="text-primary">Key attributes</span>
          </Heading>
          <div className="space-y-4">
            {criteria.map((c, i) => (
              <Description key={i}>
                <span className="text-lg font-semibold text-tertiary">{c.title}: </span>
                {c.description}
              </Description>
            ))}
          </div>
        </div>

        <picture>
          <Image src="/imgs/criteria.png" alt="2 persons thinking" width={800} height={800} />
        </picture>
      </div>
    </Section>
  )
}
