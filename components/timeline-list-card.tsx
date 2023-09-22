import { cn } from '@/lib/utils'

import { Timeline } from './timeline-list'
import { Description } from './ui/description'
import { Heading } from './ui/heading'

type TimelineListCardProps = {
  position: 'left' | 'right'
  timeline: Timeline
  index: number
}

export default function TimelineListCard({ position, index, timeline }: TimelineListCardProps) {
  const isLeft = position === 'left'

  return (
    <div className={cn('relative flex flex-col items-center justify-end md:my-16 md:flex-row maxMd:z-20 maxMd:my-8', isLeft && 'justify-start')}>
      <div className={cn('w-full md:w-1/2', isLeft ? 'md:pr-20' : 'md:pl-20')}>
        <article className={cn('relative max-w-[370px] space-y-2 maxMd:ml-2 maxMd:border-l-2 maxMd:border-primary maxMd:pl-6', isLeft ? 'ml-auto md:text-right' : 'mr-auto md:text-left')}>
          <Heading defaultFont level={2} className="text-sm font-bold text-primary md:text-lg">
            {timeline.title}
          </Heading>
          <Description className="text-sm font-normal min568:text-base">{timeline.description}</Description>
          <div className={cn('absolute -left-3.5 !-mt-[.75rem] md:top-4 maxMd:bg-background maxMd:pb-8 maxMd:pt-2', isLeft ? 'md:right-[-6.2rem]' : 'md:left-[-6.2rem]')}>
            <div className="inline-flex w-fit bg-background py-2 font-bold tabular-nums">
              <div className="rounded-full bg-gradient-to-r from-purple-900 via-purple-600 to-purple-300 px-2 py-0.5 md:px-3 md:py-1 md:text-lg">{index + 1}</div>
            </div>
          </div>
          <div className={cn('text-sm font-bold text-primary md:absolute md:top-4 md:text-lg', isLeft ? 'md:right-[-20.85rem]' : 'md:left-[-21rem]')}>{timeline.date}</div>
        </article>
      </div>
    </div>
  )
}
