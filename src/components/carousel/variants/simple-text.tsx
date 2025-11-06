"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { CarouselSchema } from "../type";

interface SimpleTextCarouselProps {
  data: CarouselSchema;
}

export const SimpleTextCarousel = ({ data }: SimpleTextCarouselProps) => {
  const { slides } = data.props;
  const config = data.config;
  const style = data.style;

  return (
    <div
      className="w-full max-w-4xl mx-auto"
      style={{
        backgroundColor: style?.backgroundColor,
        borderRadius: style?.borderRadius,
        padding: style?.padding ,
        color: "#fff",
        textAlign: "center",
        minHeight: style?.height || "100px",
      }}
    >
      <Carousel
        plugins={[
          Autoplay({
            delay: config.interval || 3000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          align: "center",
          loop: config.loop,
        }}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="flex items-center justify-center">
              <Card className="bg-transparent border-none shadow-none text-xl font-medium text-white">
                {slide.title}
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
