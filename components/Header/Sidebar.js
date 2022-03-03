import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  SIDEBAR_CLOSE,
  SIDEBAR_FUNCTION,
  SIDEBAR_OPEN,
} from "../../redux/constants/frontEndConstants";
import Link from "next/link";
import Image from "next/image";
import navbarData from "./HeaderData/navData";
import { sidebarClose } from "../../redux/actions/frontEndActions";

function Sidebar() {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.frontEnd);

  const handleSidebarClose = (e) => {
    e.preventDefault();
    dispatch({
      type: SIDEBAR_FUNCTION,
      open: !open,
    });
  };

  return (
    <div className="fixed z-40 top-0">
      <div
        className={`bg-[white] text-black shadow-lg  flex items-center justify-between  absolute h-screen  top-0 left-0 w-80  transition-all duration-700 ease-in-out transform ${
          open ? " translate-x-0" : " -translate-x-full"
        } md:w-[500px] lg:hidden`}
      >
        <section className="flex flex-col ml-10 w-full h-full">
          <div>
            <Link href="/">
              <>
                <div className=" mx-auto my-10 text-xl font-bold cursor-pointer ">
                  Ecommerce
                </div>
              </>
            </Link>
          </div>
          <div
            className={`flex flex-col overflow-y-scroll py-5  h-full flex-grow `}
          >
            {navbarData?.map((data, index) => (
              <SidebarItem
                key={index}
                title={data.title}
                data={data}
                link={data?.path}
              />
            ))}
          </div>
        </section>

        <div
          className=" border-6 border-[#ececec] bg-white shadow-lg rounded-full -mr-4 p-1 md:p-2 md:-mr-6"
          onClick={handleSidebarClose}
        >
          <AiOutlineClose className=" w-7 h-7 md:w-8 md:h-8" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
