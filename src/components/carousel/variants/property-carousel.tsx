"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { CarouselSchema } from "../type";

interface PropertyCarouselProps {
  data: CarouselSchema;
}

export const PropertyCarousel = ({ data }: PropertyCarouselProps) => {
  const { slides } = data.props;
  const config = data.config;
  const style = data.style;

  return (
    <section
      className="w-full py-12"
      style={{
        padding: style?.padding,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-100">
          Featured Properties
        </h2>

        <Carousel
          opts={{
            loop: config.loop,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: config.interval || 4000,
              stopOnInteraction: true,
            }),
          ]}
        >
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem
                key={slide.id}
                className="basis-1/3 md:basis-1/2 sm:basis-full px-4"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <Image
                    src={slide.image?.src || "/placeholder.jpg"}
                    alt={slide.image?.alt || "Property Image"}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {slide.title}
                    </h3>
                    <p className="text-sm text-gray-500">{slide.subtitle}</p>
                    <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                      {slide.description}
                    </p>

                    {slide.tags && (
                      <div className="flex gap-2 mt-3 flex-wrap">
                        {slide.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex justify-between items-center mt-4">
                      <div className="flex text-yellow-400">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            size={16}
                            fill={index < (slide.rating || 0) ? "#facc15" : "none"}
                            stroke="#facc15"
                          />
                        ))}
                      </div>

                      {slide.button && (
                        <a
                          href={slide.button.to || "#"}
                          className="bg-blue-600 text-white text-sm px-3 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                          {slide.button.label}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
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
    </section>
  );
};
