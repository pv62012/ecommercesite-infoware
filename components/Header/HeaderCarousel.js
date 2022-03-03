import React, { useCallback, useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import {
  embla__viewport,
  embla__slide,
  embla__container,
  embla__button,
  embla__dots,
  embla__dot,
  is_selected,
} from "./styles/HeaderCarousel.module.css";

import { GrNext, GrPrevious } from "react-icons/gr";
import Image from "next/image";
const HeaderCarousel = ({ CarouselData }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 5000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: "trimSnaps",
      dragFree: true,
      loop: true,
    }
    // [autoplay.current]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className={`w-full max-h-64 lg:max-h-96 `}>
      <div className="relative embla   ">
        <div className={`${embla__viewport} overflow-hidden `} ref={emblaRef}>
          <div className={`${embla__container} `}>
            {CarouselData?.map((data, index) => (
              <div
                key={index}
                className={`${embla__slide} flex w-full border border-gray-300 rounded  mx-2 h-40 lg:h-72  `}
              >
                <div className="   w-1/2 px-6 py-4   ">
                  <section className=" text-base font-semibold tracking-wider ">
                    <p className=" uppercase text-xs w-full text-[#595959]">
                      You SHould to see
                    </p>
                    <h3 className=" text-xl font-semibold w-full">
                      Carefully crafted with love to small things
                    </h3>
                  </section>
                </div>
                <div className=" relative w-1/2  flex-none">
                  <Image
                    layout="fill"
                    className=" object-cover rounded  h-full md:w-full"
                    src={data?.path}
                    alt="safari thar"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`  absolute bottom-4 left-4 ${embla__dots}`}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`${embla__dot}   ${
                index === selectedIndex ? is_selected : ""
              }`}
              type="button"
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
        {/* <button
          className={`embla__prev ${embla__button} hidden  absolute top-1/2 transform -translate-y-1/2 bg-[#fafafa] shadow-lg p-4 rounded-full md:flex left-5`}
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <GrPrevious />
        </button>
        <button
          className={`embla__next ${embla__button} hidden absolute top-1/2 transform -translate-y-1/2 right-5 bg-[#fafafa] shadow-lg p-4 rounded-full md:flex`}
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          <GrNext />
        </button> */}
      </div>
    </div>
  );
};

export default HeaderCarousel;
