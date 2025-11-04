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
import { featureCarousel } from "../default";


export const FeatureCarousel = () => {
  const { props, config } = featureCarousel;
  const { slides } = props;

  return (
    <div
      className="w-full max-w-5xl mx-auto py-16"
      style={{
        backgroundColor: featureCarousel.style?.backgroundColor,
        borderRadius: featureCarousel.style?.borderRadius,
        padding: featureCarousel.style?.padding,
      }}
    >
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Key Features
      </h2>

      <Carousel
        opts={{
          align: "start",
          loop: config.loop,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent className="-ml-4">
          {slides.map((slide) => (
            <CarouselItem
              key={slide.id}
              className="pl-4 basis-1/3 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-[#1C2128] border border-[#373E47] rounded-xl shadow-lg px-4 py-6 flex flex-col items-center text-center hover:scale-105 transition-all duration-300">
                {slide.icon && (
                  <Image
                    src={slide.icon.src}
                    alt={slide.icon.alt}
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                )}

                <h3 className="text-white text-lg font-semibold mb-2">
                  {slide.title}
                </h3>

                {slide.subtitle && (
                  <p className="text-[#8B949E] text-sm leading-relaxed">
                    {slide.subtitle}
                  </p>
                )}
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {config.showArrows && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </div>
  );
};
