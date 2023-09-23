import { partner } from '@/constant/partner'

import { Section } from '../common/section'
import Star from '../elements/star'
import PartnerCard from '../partner-card'
import { Description } from '../ui/description'
import { Heading } from '../ui/heading'

export default function Partners() {
  return (
    <Section bottomBorder>
      <div className="container relative">
        <div className="absolute left-0 top-0 z-[-1] aspect-square w-[200px] rounded-full bg-secondary blur-[60px] lg:-left-24 lg:-top-24 lg:w-[350px] lg:opacity-50" />
        <div className="absolute -right-8 bottom-80 z-[-1] aspect-square w-[200px] rounded-full bg-secondary opacity-50 blur-[60px] lg:-bottom-24 lg:-right-24 lg:w-[350px]" />
        <Star className="left-8 top-4 lg:left-4 lg:top-20" />
        <Star className="bottom-0 right-8 lg:-bottom-8 lg:left-1/2" />
        <Star colored className="right-8 top-0 lg:bottom-8 lg:left-[80%]" />

        <div className="mx-auto max-w-[500px] text-center">
          <Heading level={2}>Partners and Sponsors</Heading>
          <Description>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</Description>
        </div>

        <div className="mt-16 w-full rounded-md border border-secondary">
          <div className="mx-auto grid max-w-3xl grid-cols-3 place-items-center p-4 md:p-20">
            {partner.map((partner, index) => (
              <PartnerCard key={index} index={index + 1} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
