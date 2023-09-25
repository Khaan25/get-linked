import { Link } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Icons } from './common/icons'

export default function ContactShare({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col items-center gap-1 maxLg:!mt-8', className)}>
      <span className="text-primary">Share on</span>
      <div className="flex items-center gap-4">
        <Link href="/" target="_blank">
          <Icons.instagram />
        </Link>
        <Link href="/" target="_blank">
          <Icons.x />
        </Link>
        <Link href="/" target="_blank">
          <Icons.facebook />
        </Link>
        <Link href="/" target="_blank">
          <Icons.linkedin />
        </Link>
      </div>
    </div>
  )
}
