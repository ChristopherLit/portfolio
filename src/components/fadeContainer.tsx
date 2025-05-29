"use client"

import { useRef, useEffect, useState } from "react"
import Animation from "./creative/1"

interface FadeInProps {
  className?: string
}

export default function FadeIn({ className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.15) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px",
      }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`w-full min-h-screen transition-colors duration-1000 ease-in-out ${isVisible ? "bg-black" : "bg-transparent"
        } ${className}`}
    >

      <div className="h-screen w-full flex items-center justify-center">

      </div>

        <div className="h-screen w-full flex items-center justify-center">
     
      </div>

      <Animation />

      <video
        src="/catVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        poster="/placeholder.svg?height=1080&width=1920"
      />















    </div>
  )
}
