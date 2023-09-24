import { Slide } from './Slide'
import TimelineListCard from './timeline-list-card'

export type Timeline = {
  title: string
  description: string
  date: string
}

type TimelineListProps = {
  list: Timeline[]
}
export default function TimelineList({ list }: TimelineListProps) {
  return (
    <div>
      <div className="absolute left-1 h-[85%] w-0.5 -translate-x-1/2 rounded-md bg-primary md:left-1/2 md:translate-y-[-25px] maxMd:hidden"></div>

      {list.map((timeline, index) => (
        <Slide delay={0.25} key={index}>
          <TimelineListCard timeline={timeline} index={index} position={index % 2 === 0 ? 'left' : 'right'} />
        </Slide>
      ))}
    </div>
  )
}
