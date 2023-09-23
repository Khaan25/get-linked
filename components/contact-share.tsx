import { cn } from '@/lib/utils'

import { Icons } from './common/icons'

export default function ContactShare({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col items-center gap-1 maxLg:!mt-8', className)}>
      <span className="text-primary">Share on</span>
      <div className="flex items-center gap-4">
        <Icons.instagram />
        <Icons.x />
        <Icons.facebook />
        <Icons.linkedin />
      </div>
    </div>
  )
}
