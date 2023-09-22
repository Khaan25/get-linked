import { prize } from '@/constant/prize'

import PrizeCard from './prize-card'

export default function PrizeContent() {
  return (
    <div className="grid grid-cols-3 gap-4 md:gap-8">
      {prize.map((prize, index) => (
        <PrizeCard key={index} prize={prize} index={index + 1} />
      ))}
    </div>
  )
}
