"use client";

import React from "react";;
import { BlackToWhiteGradient, WhiteToBlackGradient } from "./creative/gradient";
import { TextAnimate } from "./magicui/text-animate";
import { StickyTextCenter, StickyTextLeft } from "./stick-text";
import { motion, useTransform } from "framer-motion";
import { ShrinkingText } from "./shrinkingText";

export default function Video() {
  return (
    <div className="w-full">

      <WhiteToBlackGradient />

      <div className="bg-black">

        <div className="h-[35vh] w-full flex items-center justify-center" />

        <StickyTextLeft stickyDistance={5}>
          <TextAnimate
            animation="blurInUp"
            by="word"
            once
            duration={1.3}
            delay={0.4}
            className="text-3xl font-bold tracking-tighter sm:text-5xl text-white ml-8"
          >
           My other passion is cinematography. This is where I use light, framing, and colour grading to bring my ideas to life.
          </TextAnimate>
        </StickyTextLeft>

        <div className="h-[35vh] w-full flex items-center justify-center" />

        <StickyTextCenter stickyDistance={1}>
          {(scrollYProgress) => (
            <ShrinkingText scrollYProgress={scrollYProgress} />
          )}
        </StickyTextCenter>

        <div className="h-[60vh] w-full flex items-center justify-center" />

        <video
          src="https://videos.christopherlit.com/portfolio_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        <div className="h-screen w-full flex items-center justify-center" />
      </div>
      <BlackToWhiteGradient />

    </div>

  );
};