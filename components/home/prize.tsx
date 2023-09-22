import Image from 'next/image'

import { Section } from '../common/section'
import Star from '../elements/star'
import PrizeContent from '../prize-content'
import { Description } from '../ui/description'
import { Heading } from '../ui/heading'

export default function Prize() {
  return (
    <Section>
      <div className="container relative">
        <div className="absolute left-0 top-0 z-[-1] aspect-square w-[200px] rounded-full bg-secondary blur-[60px] lg:left-28 lg:top-28 lg:w-[350px] lg:opacity-50" />
        <div className="absolute -right-8 bottom-80 z-[-1] aspect-square w-[200px] rounded-full bg-secondary opacity-50 blur-[60px] lg:-right-72 lg:top-52 lg:w-[350px]" />
        <Star className="right-8 top-4 lg:left-4 lg:top-20" />
        <Star className="bottom-0 right-8 lg:-bottom-8 lg:left-1/2" />
        <Star colored className="right-8 top-0 lg:bottom-8 lg:left-[80%]" />

        <div className="text-center lg:ml-auto lg:w-[500px] lg:text-left">
          <Heading level={2}>
            Prizes and
            <br /> <span className="text-primary">Rewards</span>
          </Heading>
          <Description>Highlight of the prizes or rewards for winners and for participants.</Description>
        </div>

        <div className="grid items-center gap-28 md:gap-40 lg:grid-cols-2 lg:gap-12 xl:items-end">
          <picture>
            <Image className="mx-auto max-w-[500px]" src="/imgs/prize.png" alt="trophie" width={800} height={800} />
          </picture>

          <PrizeContent />
        </div>
      </div>
    </Section>
  )
}
