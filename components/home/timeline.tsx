import { timeline } from '@/constant/timeline'

import { Section } from '../common/section'
import Star from '../elements/star'
import TimelineList from '../timeline-list'
import { Description } from '../ui/description'
import { Heading } from '../ui/heading'

export default function Timeline() {
  return (
    <Section>
      <div className="container relative">
        <Star dim className="right-8 top-96 lg:right-72 lg:top-1/2" />
        <Star className="bottom-0 left-8 lg:bottom-32 lg:left-32" />
        <Star colored className="right-8 top-0 lg:bottom-32 lg:left-2/3" />

        <div className="space-y-4">
          <Heading level={2} className="text-center">
            Timeline
          </Heading>
          <Description className="mx-auto max-w-[400px] text-center">Here is the breakdown of the time we anticipate using for the upcoming event.</Description>
          <div className="md:!mt-20">
            <TimelineList list={timeline} />
          </div>
        </div>
      </div>
    </Section>
  )
}
