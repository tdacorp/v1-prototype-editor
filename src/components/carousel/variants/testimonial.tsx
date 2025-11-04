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
import { testimonial } from "../default";
import { Star } from "lucide-react";

export const TestimonialCarousel = () => {
    const { slides } = testimonial.props;

    return (
        <section
            className="w-full py-16"
            style={{
                padding: testimonial.style?.padding,
            }}
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-white text-3xl font-semibold mb-4 text-gray-800">
                    What Our Clients Say
                </h2>
                <p className="text-gray-400 mb-10">
                    Real feedback from people who use our services
                </p>

                <Carousel
                    opts={{
                        loop: testimonial.config.loop,
                        align: "start",
                    }}
                    plugins={[
                        Autoplay({
                            delay: testimonial.config.interval || 3000,
                            stopOnInteraction: true,
                        }),
                    ]}
                    className="w-full"
                >
                    <CarouselContent className="flex items-center">
                        {slides.map((slide) => (
                            <CarouselItem
                                key={slide.id}
                                className="basis-1/3 md:basis-1/2 sm:basis-full flex justify-center px-4"
                            >
                                <div className="p-6 bg-white shadow-md rounded-2xl border border-gray-100 text-center max-w-sm mx-auto">
                                    <div className="flex justify-center mb-4">
                                        <Image
                                            src={slide.image?.src || "/placeholder.jpg"}
                                            alt={slide.image?.alt || "user image"}
                                            width={100}
                                            height={100}
                                            className="rounded-full object-cover border-4 border-gray-200"
                                        />
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {slide.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-3">
                                        {slide.subtitle}
                                    </p>

                                    <p className="text-gray-600 italic mb-4">
                                        “{slide.description}”
                                    </p>

                                    <div className="flex justify-center text-yellow-400">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <Star
                                                key={index}
                                                size={18}
                                                fill={index < (slide.rating || 0) ? "#facc15" : "none"}
                                                stroke="#facc15"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {testimonial.config.showArrows && (
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
