"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { imageGalleryCarousel } from "../default";

export const ImageGalleryCarousel = () => {
  const { props, config, style } = imageGalleryCarousel;
  const { slides } = props;

  return (
    <div
      className="w-full max-w-6xl mx-auto py-16"
      style={{
        backgroundColor: style?.backgroundColor || "#0D1117",
        borderRadius: style?.borderRadius || "16px",
        padding: style?.padding || "32px",
      }}
    >
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Image Gallery
      </h2>

      <Carousel
        plugins={[
          Autoplay({
            delay: config.interval || 3000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {slides.map((slide) => (
            <CarouselItem
              key={slide.id}
              className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Card className="bg-[#1C2128] border border-[#373E47] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300">
                {slide.image && (
                  <div className="relative w-full h-56 sm:h-64 md:h-72">
                    <Image
                      src={slide.image.src}
                      alt={slide.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                )}
                {slide.title && (
                  <p className="text-center text-white text-base py-3 font-medium">
                    {slide.title}
                  </p>
                )}
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {config.showArrows && (
          <>
            <CarouselPrevious className="text-white bg-[#2D333B] hover:bg-[#373E47]" />
            <CarouselNext className="text-white bg-[#2D333B] hover:bg-[#373E47]" />
          </>
        )}
      </Carousel>
    </div>
  );
};
