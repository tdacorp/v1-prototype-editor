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
import { articleCardCarousel } from "../default"; 

export const ArticleCardCarousel = () => {
  const { props, config, style } = articleCardCarousel;
  const slides = props.slides;

  return (
    <section
      className="w-full py-16"
      style={{
        padding: style?.padding,
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-200">
          Latest Articles
        </h2>
        <p className="text-gray-500 mb-10">
          Explore our trending posts from the tech and design world.
        </p>

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
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem
                key={slide.id}
                className="
                  basis-1/3 lg:basis-1/3 md:basis-1/2 sm:basis-full
                  flex justify-center px-4
                "
              >
                <div className="w-[360px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition">
                  {/* Image */}
                  {slide.articleCard?.image && (
                    <div className="relative w-full h-[200px]">
                      <Image
                        src={slide.articleCard.image.src}
                        alt={slide.articleCard.image.alt}
                        fill
                        className="object-cover"
                      />
                      {slide.articleCard.bookmark && (
                        <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:bg-gray-50 transition">
                          <svg
                            className="w-5 h-5 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1 text-left">
                    {/* Badges */}
                    {slide.articleCard?.badge && slide.articleCard.badge.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {slide.articleCard.badge.map((badgeText, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs font-medium"
                          >
                            {badgeText}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2">
                      {slide.articleCard?.title}
                    </h3>

                    {/* Subtitle */}
                    {slide.articleCard?.subtitle && (
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {slide.articleCard.subtitle}
                      </p>
                    )}

                    {/* Author */}
                    {slide.articleCard?.author && (
                      <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-100">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-white font-bold text-sm">
                          {slide.articleCard.author.avatar ? (
                            <Image
                              src={slide.articleCard.author.avatar}
                              alt={slide.articleCard.author.name}
                              width={40}
                              height={40}
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            slide.articleCard.author.name.charAt(0).toUpperCase()
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">
                            {slide.articleCard.author.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {slide.articleCard.author.date}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
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
