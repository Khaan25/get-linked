import { Dispatch, SetStateAction } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'

import { cn } from '@/lib/utils'

export interface AccordionProps {
  item: { title: string; description: string }
  index: number
  isExpanded: false | number
  setIsExpanded: Dispatch<SetStateAction<number | false>>
}

export const Accordion = ({ item: { title, description }, index, isExpanded, setIsExpanded }: AccordionProps) => {
  const isOpen = index === isExpanded

  return (
    <article aria-label={`faq about ${title}`} className="space-y-4 border-b border-tertiary py-4 last:border-0 min568:py-8">
      <div
        onClick={() => setIsExpanded(isOpen ? false : index)}
        className={cn('text-title flex cursor-pointer items-center justify-between gap-4 text-sm font-medium lg:text-xl', isOpen && 'text-primary')}
      >
        {title}
        <div>{isOpen ? <Minus /> : <Plus />}</div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 1, height: 0 },
            }}
            className="overflow-hidden text-sm font-normal md:text-base md:leading-7"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </article>
  )
}
