import Image from 'next/image'

import { cn } from '@/lib/utils'

import { Heading } from './ui/heading'

type PrizeCardProps = {
  prize: {
    icon: string
    title: string
    price: string
  }
  index: number
}

export default function PrizeCard({ prize: { icon, title, price }, index }: PrizeCardProps) {
  return (
    <article className={cn('relative h-fit rounded-md border border-primary bg-[#d434fe1e] text-center', index === 2 && 'translate-y-5 bg-[#903aff1e]')}>
      <Image
        className={cn(
          'absolute inset-0 -top-40 m-auto aspect-square w-[130px] md:!-top-64 lg:-top-60 min469:-top-48',
          index === 2 && 'w-[245px] md:!-top-72 xl:-left-8 xl:-top-80 xl:!max-w-[245px] min568:-top-56 min568:max-w-[170px]'
        )}
        src={icon}
        alt={title}
        width={500}
        height={500}
      />
      <div className={cn('mt-4 flex flex-col px-2 py-6 lg:gap-2 min568:px-4', index === 2 && 'mt-8 xl:mt-20')}>
        <Heading className="text-lg font-bold md:text-4xl lg:mt-10" level={2}>
          {title}
        </Heading>
        <span className="text-sm font-semibold md:text-2xl">Runner</span>
        <span className={cn('text-sm font-bold text-primary md:text-xl xl:text-3xl', index === 2 && 'text-secondary')}>{price}</span>
      </div>
    </article>
  )
}
