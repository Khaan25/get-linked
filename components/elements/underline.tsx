import { ReactNode } from 'react'

import { Icons } from '../common/icons'

export default function Underline({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-fit">
      {children}
      <Icons.underline className="absolute -bottom-2 right-0 w-full text-tertiary md:-bottom-4 md:w-[125%]" />
    </div>
  )
}
