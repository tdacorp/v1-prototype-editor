"use client";

import React from "react";
import { HeroProps } from "../types";
import HeroContent from "../HeroContent";
import HeroMedia from "../HeroMedia";

const LeftHero: React.FC<HeroProps> = ({
  alignment = "left",
  contentStyling,
  mediaPosition = "left",
  ...props
}) => {
  const isMediaLeft = mediaPosition === "left";

  return (
    <div
      className={`grid items-center gap-10 lg:gap-16 ${
        isMediaLeft ? "lg:grid-cols-2" : "lg:grid-cols-2 lg:flex-row-reverse"
      }`}
    >
      {/* Left: Media */}
      <div className="relative w-full h-full">
        <HeroMedia {...props} />
      </div>

      {/* Right: Text Content */}
      <div
        className={`flex flex-col justify-${
          contentStyling?.verticalAlignment || "center"
        } gap-6`}
        style={{
          textAlign: alignment,
          maxWidth: contentStyling?.maxWidth || "700px",
        }}
      >
        <HeroContent {...props} />
      </div>
    </div>
  );
};

export default LeftHero;
