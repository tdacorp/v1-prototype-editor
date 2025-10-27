import React, { useState } from "react";
import { HeroProps } from "./types";

const HeroMedia: React.FC<HeroProps> = ({
  image,
  videoUrl,
  illustration,
  altText,
}) => {
  const [imgError, setImgError] = useState(false);

  if (videoUrl) {
    return (
      <video
        className="w-full h-full object-cover rounded-2xl"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        onError={() => console.warn("Hero video failed to load:", videoUrl)}
      />
    );
  }

  if (image) {
    const src = Array.isArray(image) ? image[0] : image;
    return (
      <img
        src={src}
        alt={altText || "hero-image"}
        className="w-full h-auto rounded-2xl"
        onError={() => setImgError(true)}
      />
    );
  }

  if (illustration) {
    const src = illustration || "https://images.pexels.com/photos/16347225/pexels-photo-16347225.jpeg";
    return (
      <img
        src={src}
        alt={altText || "hero-illustration"}
        className="w-full h-auto"
      />
    );
  }

  return null;
};

export default HeroMedia;
