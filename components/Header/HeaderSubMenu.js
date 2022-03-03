import React from "react";
import HeaderCarousel from "./HeaderCarousel";
import HeaderCarouselData from "./HeaderData/HeaderCarouselData";

const HeaderSubMenu = ({ data }) => {
  return (
    <div className=" text-[#242424] rounded-md shadow-lg min-w-max ">
      <section className="flex  ">
        <div className="bg-[#EAEAEA] lg:px-10 lg:py-14 xl:py-16 xl:px-20 ">
          {data?.map((data, index) => (
            <div
              key={index}
              className=" cursor-pointer flex items-center hover:text-[#658e75] my-1"
            >
              <div className="w-1 h-1 bg-black rounded-full mr-2"></div>{" "}
              {data?.title}
            </div>
          ))}
        </div>
        <div className="px-2 bg-white text-black lg:w-[500px] lg:px-10 lg:py-14 xl:w-[680px] xl:py-16 xl:px-16">
          <HeaderCarousel CarouselData={HeaderCarouselData} />
        </div>
      </section>
    </div>
  );
};

export default HeaderSubMenu;
