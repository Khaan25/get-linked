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
      <div className="absolute left-1 h-full w-0.5 -translate-x-1/2 rounded-md bg-primary md:left-1/2 md:translate-y-0 maxMd:hidden"></div>

      {list.map((timeline, index) => (
        <TimelineListCard key={index} isLastTimeLine={index === list.length - 1} timeline={timeline} index={index} position={index % 2 === 0 ? 'left' : 'right'} />
      ))}
    </div>
  )
}
