'use client'

import { ReactNode, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

type props = {
  children: ReactNode
  className?: string
  delay?: number
}

export const Slide = ({ children, className, delay }: props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('stop')
    }
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      variants={{
        start: { opacity: 0, y: 50 },
        stop: { opacity: 1, y: 0 },
      }}
      initial="start"
      animate={controls}
      transition={{
        ease: 'linear',
        delay: delay,
        duration: 0.5,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
