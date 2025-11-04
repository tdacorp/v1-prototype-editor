"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image"; 
import { brandlogo } from "../default";

export const BrandLogo = () => {
  const { slides } = brandlogo.props;

  return (
    <section
      className="w-full py-8"
      style={{
        backgroundColor: brandlogo.style?.backgroundColor,
        padding : brandlogo.style?.padding
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">
          {slides[0].title || "Our Trusted Brands"}
        </h2>
        <p className="text-gray-500 mb-8">
          {slides[0].subtitle || "We’re proud to collaborate with these brands"}
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: brandlogo.config.loop,
          }}
          className="w-full"
        >
          <CarouselContent className="flex items-center">
            {slides.map((slide) => (
              <CarouselItem
                key={slide.id}
                   className="basis-1/5 md:basis-1/4 sm:basis-1/2 flex justify-center"
              >
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center w-[200px] h-[120px]">
                  <Image
                   src={slide.image?.src || ""} 
                    alt={slide.image?.alt || "Brand logo"}
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {brandlogo.config.showArrows && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
};
