"use client"

import { useEffect, useState } from "react"

export function BlackToWhiteGradient() {
  return (
    <div className="relative w-full">
      {/* Gradient section with mesh grain - 100vh */}
      <div
        className="relative w-full h-screen"
        style={{
          background: "linear-gradient(to bottom, #000000, #ffffff)",
        }}
      >
        {/* Extremely fine mesh grain overlay with fade-out */}
        <div
          className="relative inset-0 pointer-events-none"
          style={{
            opacity: 0.03,
            backgroundImage: 
               `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              ,
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

    
    </div>
  )
}

export function WhiteToBlackGradient() {

  return (
    <div className="relative w-full">
      {/* Gradient section with mesh grain - 100vh */}
      <div
        className="relative w-full h-screen"
        style={{
          background: "linear-gradient(to bottom, #ffffff, #000000)",
        }}
      >
        {/* Extremely fine mesh grain overlay with fade-out */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.03,
            backgroundImage:
               `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              ,
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* Solid black section with no grain - 50vh */}
      <div
        className="w-full bg-black"
        style={{
          height: "50vh",
        }}
      />
    </div>
  )
}
