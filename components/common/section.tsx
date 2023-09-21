import { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  bottomBorder?: boolean
}

const Section = ({ bottomBorder, className, ...props }: SectionProps) => {
  const Comp = 'section'

  return <Comp {...props} className={cn('py-16 md:py-24', 'paddingX', bottomBorder && 'border-b border-border/20', className)} />
}

Section.displayName = 'Section'

export { Section }
