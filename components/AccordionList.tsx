'use client'

import { Children, useState } from 'react'

import { Accordion } from './Accordion'

export interface AccordionListProps {
  list: {
    title: string
    description: string
  }[]
}

export const AccordionList = ({ list }: AccordionListProps) => {
  const [isExpanded, setIsExpanded] = useState<false | number>(0)

  return <div aria-label="faqs">{Children.toArray(list.map((item, index) => <Accordion item={item} index={index} isExpanded={isExpanded} setIsExpanded={setIsExpanded} />))}</div>
}
