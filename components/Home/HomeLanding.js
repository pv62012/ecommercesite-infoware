import React, { useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  embla__viewport,
  embla__slide,
  embla__container,
  embla__button,
  embla__dots,
  embla__dot,
  is_selected,
} from "./styles/HomeCarousel.module.css";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

import HomeCarouselData from "./HomeData/HomeCarouselData";
import { AiOutlinePhone } from "react-icons/ai";

import { GrNext, GrPrevious } from "react-icons/gr";
import { AnimatedTitle } from "../Animation/AnimatedTitle";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

const MainButton = styled(Button)(({ theme }) => ({
  color: "#f5f5f5",
  backgroundColor: "transparent !important",
  padding: "8px 20px",
  fontSize: "20px",
  border: "3px solid",
  borderColor: "#f5f5f5 !important",
  display: "flex",
  alignItems: "center",
  marginTop: "30px",
  transition: "all 0.3s ease-in",
  [theme.breakpoints.down("md")]: {
    padding: "5px 12px",
    fontSize: "12px",
    marginTop: "30px",
  },
  "&:hover": {
    backgroundColor: "#fafafa !important ",
    color: "#658e75",
  },
  "&:active": {
    backgroundColor: "#c89666",
  },
}));

function HomeLanding() {
  const autoplay = useRef(
    Autoplay(
      { delay: 5000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: "trimSnaps",
    },
    [autoplay.current]
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
    <div className={`w-full    `}>
      <div className="relative embla   ">
        <div className={`${embla__viewport} overflow-hidden `} ref={emblaRef}>
          <div className={`${embla__container} `}>
            {HomeCarouselData?.map((data, index) => (
              <div
                key={index}
                className={`${embla__slide} w-full relative h-96 lg:h-screen  `}
              >
                <div className=" absolute z-10  ml-7 p-3 mt-20  text-white  w-full md:w-[550px]  md:ml-10 md:mt-28 lg:w-[650px] lg:mt-44 lg:ml-32    ">
                  <section className=" text-2xl font-bold tracking-wider md:text-3xl  lg:mt-10 lg:text-6xl">
                    <AnimatedTitle currentInView={selectedIndex == index}>
                      {data?.title}
                    </AnimatedTitle>
                  </section>
                  <section className="mt-5 text-xl mr-5">
                    <AnimatedTitle currentInView={selectedIndex == index}>
                      {data?.description}
                    </AnimatedTitle>
                  </section>

                  <Link href={"/"}>
                    <MainButton className="  font-bold whitespace-nowrap ">
                      Shop now
                    </MainButton>
                  </Link>
                </div>
                {data?.type == "video" ? (
                  <video
                    autoPlay
                    loop
                    className=" object-cover brightness-50  h-full md:w-full "
                  >
                    <source src={data?.path} />
                  </video>
                ) : (
                  <Image
                    layout="fill"
                    className=" object-cover brightness-50 h-full md:w-full"
                    src={data?.path}
                    alt="safari thar"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div
          className={` absolute bottom-2 left-28 md:left-10  lg:bottom-10 lg:left-36 ${embla__dots}`}
        >
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
        <button
          className={`embla__prev ${embla__button} hidden  absolute top-1/2 transform -translate-y-1/2 bg-[#fafafa] shadow-lg p-4 rounded-full lg:flex lg:left-5`}
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <GrPrevious />
        </button>
        <button
          className={`embla__next ${embla__button} hidden absolute top-1/2 transform -translate-y-1/2 right-5 bg-[#fafafa] shadow-lg p-4 rounded-full lg:flex`}
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
}

export default HomeLanding;
