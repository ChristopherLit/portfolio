import React from "react";
import Animation from "./creative/1";
import { BlackToWhiteGradient, WhiteToBlackGradient } from "./creative/gradient";

export default function Video() {
  return (
    <div className="w-full">

      <WhiteToBlackGradient />

      <div className="bg-black">

        <div className="h-screen w-full flex items-center justify-center" />

        <Animation />

        <div className="h-[50vh] w-full flex items-center justify-center" />

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