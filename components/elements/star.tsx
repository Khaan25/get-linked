import Image from 'next/image'

import { cn } from '@/lib/utils'

export default function Star({ className, dim, colored }: { className?: string; dim?: boolean; colored?: boolean }) {
  return <Image className={cn('absolute z-50 maxMd:w-[15px]', dim && 'opacity-50', className)} src={colored ? '/icons/star-colored.png' : '/icons/star.png'} width={26} height={32} alt="Star Icon" />
}
