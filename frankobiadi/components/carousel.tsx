
"use client";

import { useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import poImage from "@/public/poImage.jpg";
import poImage1 from "@/public/poImage1.jpg";
import poImage2 from "@/public/poImage2.jpg";
import poImage3 from "@/public/poImage3.webp";
import poImage4 from "@/public/poImage4.jpg";
import poImage5 from "@/public/poImage5.avif";
import poImage6 from "@/public/poImage6.avif";

const slides = [
  {
    image: poImage,
    title:
      "Fasyl Technology Group Ghana, Quality Management Standards (ISO 9001:2015) Award",
  },
  {
    image: poImage1,
    title:
      "Fasyl Technology Group Ghana, Quality Management Standards (ISO 9001:2015) Award",
  },
  {
    image: poImage2,
    title:
      "Fasyl Technology Group Ghana, Quality Management Standards (ISO 9001:2015) Award",
  },
  {
    image: poImage3,
    title:
      "Fasyl Technology Group Ghana, Quality Management Standards (ISO 9001:2015) Award",
  },
  {
    image: poImage4,
    title:
      "Fasyl Technology Group Ghana, Quality Management Standards (ISO 9001:2015) Award",
  },
  {
    image: poImage5,
    title:
      "Fasyl Technology Group Ghana, Quality Management Standards (ISO 9001:2015) Award",
  },
  {
    image: poImage6,
    title:
      "Fasyl Technology Group Ghana, Quality Management Standards (ISO 9001:2015) Award",
  },
];

export default function Carousel() {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [autoplay.current]
  );

  return (
    <section className="relative w-full py-10">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="basis-full shrink-0 px-3 sm:basis-1/2 lg:basis-1/3"
            >
              <div className="overflow-hidden rounded-xl bg-white mb-10 transition-shadow duration-300 hover:shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                 
                </div>

                <div className="p-5">
                  <h2 className="line-clamp-2 text-lg font-semibold text-gray-900">
                    {slide.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-3 top-1/2 z-10 flex cursor-pointer h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 shadow-lg transition hover:bg-gray-100"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-3 top-1/2 z-10 cursor-pointer flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 shadow-lg transition hover:bg-gray-100"
      >
        ❯
      </button>
    </section>
  );
}