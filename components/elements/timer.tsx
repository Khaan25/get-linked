'use client'

import { useCountdown } from '@/hooks/useCountdown'

import DateTimeDisplay from '../date-time-display'
import { Description } from '../ui/description'
import { Heading } from '../ui/heading'

const ExpiredNotice = () => {
  return (
    <div className="!mt-20">
      <Heading level={3}>Expired!</Heading>
      <Description>Times Up! Deadline is over, you can not submit your submission.</Description>
    </div>
  )
}

const ShowCounter = ({ hours, minutes, seconds }: { hours: number; minutes: number; seconds: number }) => {
  return (
    <div className="!mt-20 flex items-center gap-6 maxMd:justify-center">
      <DateTimeDisplay value={hours} type="Hours" />
      <DateTimeDisplay value={minutes} type="Minutes" />
      <DateTimeDisplay value={seconds} type="Seconds" />
    </div>
  )
}

export default function Timer({ targetDate }: { targetDate: number }) {
  const [, hours, minutes, seconds] = useCountdown(targetDate)

  if (hours + minutes + seconds <= 0) {
    return <ExpiredNotice />
  }
  return <ShowCounter hours={hours} minutes={minutes} seconds={seconds} />
}
