"use client"

import { useRef, ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface StickyTextSectionPropsCenter {
  children: (scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]) => ReactNode
  stickyDistance?: number
}

interface StickyTextSectionPropsLeft {
  children: ReactNode
  stickyDistance?: number
}

export function StickyTextCenter({
  children,
  stickyDistance = 100,
}: StickyTextSectionPropsCenter) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const totalHeight = `${200 + stickyDistance}vh`

  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["50vh", "0vh", "0vh", "-50vh"])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: totalHeight }}
    >
      <motion.div
        className="sticky top-1/2 flex items-center justify-center px-6"
        style={{
          y,
          opacity,
          transform: "translateY(-50%)",
        }}
      >
        <div className="max-w-5xl">
          {children(scrollYProgress)}
        </div>
      </motion.div>
    </div>
  )
}

export function StickyTextLeft({
  children,
  stickyDistance = 100,
}: StickyTextSectionPropsLeft) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const totalHeight = `${200 + stickyDistance}vh`

  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["50vh", "0vh", "0vh", "-50vh"])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: totalHeight }}
    >
      
      <motion.div
        className="sticky top-1/2 flex px-6"
        style={{
          y,
          opacity,
          transform: "translateY(-50%)",
        }}
      >
        
        <div className="max-w-5xl">
          {children}
        </div>
      </motion.div>
    </div>
  )
}
