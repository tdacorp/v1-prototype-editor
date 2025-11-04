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
import { userProfileCarousel } from "../default"; 
import { Button } from "@/components/ui/button";

export const UserProfileCarousel = () => {
  const { slides } = userProfileCarousel.props;

  return (
    <section
      className="w-full py-16"
      style={{
        padding: userProfileCarousel.style?.padding,
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-100">
          Meet Our Team
        </h2>
        <p className="text-gray-500 mb-10">
          The people who make everything possible
        </p>

        <Carousel
          opts={{
            loop: userProfileCarousel.config.loop,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: userProfileCarousel.config.interval || 3000,
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
                <div className="w-[320px] pt-0 pb-8 px-0 rounded-xl shadow-lg bg-white flex flex-col items-center">
                  <div className="w-full bg-green-700 h-24 relative flex items-end justify-center rounded-t-2xl">
                    {slide.user?.avatar && (
                      <Image
                        src={slide.user.avatar}
                        alt={slide.user.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full border-4 border-white absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{ top: "50%" }}
                      />
                    )}
                  </div>

                  <div className="mt-14 w-full text-center px-6">
                    <h3 className="text-green-700 text-lg font-semibold">
                      {slide.user?.name}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {slide.user?.position}
                    </p>

                    <p className="text-gray-500 italic text-sm mb-4">
                      {slide.description}
                    </p>

                    <div className="flex justify-center gap-8 mb-6">
                      <div>
                        <div className="text-xl font-bold text-gray-900">
                          {slide.user?.followers}
                        </div>
                        <div className="text-green-700 font-medium text-xs -mt-1">
                          Followers
                        </div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">
                          {slide.user?.following}
                        </div>
                        <div className="text-green-700 font-medium text-xs -mt-1">
                          Following
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center gap-4">
                      <Button className="bg-green-700 text-white rounded-full px-8">
                        {slide.button?.label || "Follow"}
                      </Button>
                      <Button
                        variant="outline"
                        className="border-green-700 text-green-700 rounded-full px-8"
                      >
                        {slide.secondaryButton?.label || "Message"}
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {userProfileCarousel.config.showArrows && (
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
