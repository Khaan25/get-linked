import Image from 'next/image'
import { faqs } from '@/constant/faq'

import { AccordionList } from '../AccordionList'
import { Section } from '../common/section'
import Star from '../elements/star'
import { Description } from '../ui/description'
import { Heading } from '../ui/heading'

export default function Faq() {
  return (
    <Section bottomBorder>
      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <Star className="bottom-12 left-8 lg:hidden" />
        <Star dim className="right-8 top-96 lg:left-72 lg:top-32" />
        <Star className="bottom-0 right-8 lg:bottom-32 lg:left-1/2" />
        <Star colored className="right-8 top-0 lg:bottom-32 lg:left-2/3" />

        <div className="space-y-4">
          <Heading level={2} className="maxLg:text-center">
            Frequently Ask
            <br /> <span className="text-primary">Question</span>
          </Heading>
          <Description className="maxLg:text-center">
            We got answers to the questions that you might want to ask about <strong>getlinked Hackathon 1.0</strong>
          </Description>
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
