import { FC, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export type DescriptionProps = HTMLAttributes<HTMLParagraphElement>

export const Description: FC<DescriptionProps> = ({ className, children, ...rest }) => {
  return (
    <p {...rest} className={cn('text-sm leading-7 text-white md:text-base max360:text-sm max360:leading-6', className)}>
      {children}
    </p>
  )
}
