import Image from 'next/image'

import { cn } from '@/lib/utils'

export default function PartnerCard({ partner, index }: { partner: string; index: number }) {
  return (
    <article
      className={cn(
        'relative border-primary p-4 md:p-12',
        index === 1 &&
          'border-b-4 border-r-4 before:absolute before:inset-0 before:-bottom-6 before:-right-7 before:left-auto before:top-auto before:z-20 before:h-[50px] before:w-[50px] before:rounded-full before:bg-background before:content-[""]',
        index === 2 && 'border-b-4',
        index === 3 &&
          'border-b-4 border-l-4 before:absolute before:inset-0 before:-bottom-6 before:-left-7 before:top-auto before:z-20 before:h-[50px] before:w-[50px] before:rounded-full before:bg-background before:content-[""]',
        index === 4 && 'border-r-4',
        index === 6 && 'border-l-4'
      )}
    >
      <Image className="min-h-[50px] w-[130px] object-contain md:min-h-[130px]" src={partner} width={130} height={130} alt="Partner" />
    </article>
  )
}
