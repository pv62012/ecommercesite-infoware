import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import Hamburger from "./Header/Hamburger";
import Sidebar from "./Header/Sidebar";
import styles from "./Header/Header.module.css";
import useOnClickOutsideRef from "./helper/handler";
import { SIDEBAR_FUNCTION } from "../redux/constants/frontEndConstants";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { FormControl, Paper } from "@mui/material";

import styled from "@emotion/styled";
import HeaderItem from "./Header/HeaderItem";
// import Cookies from "js-cookie";

import navbarData from "./Header/HeaderData/navData";
import { BiCart, BiHeart } from "react-icons/bi";

const SelectCityDiv = styled(FormControl)({
  margin: "0px 30px 10px 0px",
});

const SearchDiv = styled(Paper)({
  display: "flex",
  alignItems: "center",
  padding: "5px 10px",
  borderRadius: "30px",
});

function Header() {
  const router = useRouter();
  const [siginContent, setSiginContent] = useState(false);
  const [city, setcity] = useState("");
  const { open } = useSelector((state) => state.frontEnd);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const [navbar, setNavbar] = useState(true);
  const modalRef = useOnClickOutsideRef(siginContent, () =>
    setSiginContent(false)
  );

  const toggleContainer = useOnClickOutsideRef(open, () =>
    dispatch({ type: SIDEBAR_FUNCTION, open: false })
  );

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarColor);

    return () => {
      window.removeEventListener("scroll", handleNavbarColor);
    };
  }, []);

  const handleNavbarColor = (e) => {
    e.preventDefault();
    if (window.scrollY >= 50) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  const handleChange = (e) => {
    setcity(e.target.value);
  };
  return (
    <div>
      <section ref={toggleContainer}>
        {/* <section> */}
        <Sidebar />
      </section>
      <div
        className={`  flex w-full top-0 z-30 fixed pt-5 pb-3  transition-all duration-700 transform items-center bg-[#fafafa] px-6 md:px-10 lg:px-16 xl:px-28 ${
          styles.navbar_backgroud
        } ${navbar ? "" : ` ${styles.navbar_styles} `} `}
      >
        {/* logo and menu items start */}
        <div className="flex  items-center ">
          {/* hamburger and logo */}

          <Hamburger />
          <Link href="/">
            <>
              <div className=" uppercase  text-xl font-bold cursor-pointer ">
                {/* <Image
                  src="/logo/CI.png"
                  className=" object-contain"
                  width={200}
                  height={80}
                /> */}
                Pankaj
              </div>
            </>
          </Link>

          {/* hamburger and logo */}
        </div>
        {/* logo and menu items ends */}
        <div className=" hidden ml-auto lg:flex bg-[#fafafa]  ">
          {navbarData?.map((data, index) => (
            <div key={index}>
              <HeaderItem title={data.title} data={data} link={data?.path} />
            </div>
          ))}
        </div>
        <div className="ml-auto lg:ml-2 xl:ml-5">
          <section className="flex">
            <BiHeart className="text-3xl hover:text-red-400  " />
            <BiCart className="text-3xl ml-4 " />
          </section>
          <section className="hidden lg:flex">
            <div className=" rounded-full text-center mx-auto  m-2 w-1 h-1 "></div>
          </section>
        </div>
        {/* <div className="mr-5 ml-auto md:mr-10">
          <Link href="/">
            <IconButton sx={{ borderRadius: "30px", p: "0px" }}>
              <button className=" flex items-center shadow-xl border-2 border-[#17c8f5fd] focus:outline-none  text-base text-black tracking-wide px-4 py-1 rounded-3xl outline-none lg:text-xl lg:px-6 lg:uppercase  lg:border-4 lg:font-semibold  ">
                <span className="">Log In</span>
              </button>
            </IconButton>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
