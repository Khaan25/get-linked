import Image from 'next/image'
import { faqs } from '@/constant/faq'

import { AccordionList } from '../AccordionList'
import { Section } from '../common/section'
import Star from '../elements/star'
import { Heading } from '../ui/heading'

export default function Faq() {
  return (
    <Section bottomBorder>
      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <div className="absolute left-0 top-0 z-[-1] aspect-square w-[200px] rounded-full bg-secondary blur-[60px] lg:left-28 lg:top-28 lg:w-[350px] lg:opacity-50" />
        <div className="absolute -right-8 top-80 z-[-1] aspect-square w-[200px] rounded-full bg-secondary opacity-50 blur-[60px] lg:-right-28 lg:top-44 lg:w-[350px]" />
        <Star className="left-8 top-80 lg:hidden" />
        <Star dim className="right-8 top-96 lg:left-72 lg:top-32" />
        <Star className="bottom-0 left-8 lg:bottom-32 lg:left-1/2" />

        <div className="space-y-4 maxLg:text-center">
          <Heading level={2}>
            Frequently Ask
            <br /> <span className="text-primary">Question</span>
          </Heading>
          <div>
            <AccordionList list={faqs} />
          </div>
        </div>

        <picture>
          <Image src="/imgs/faq.png" alt="person thinking" width={800} height={800} />
        </picture>
      </div>
    </Section>
  )
}
