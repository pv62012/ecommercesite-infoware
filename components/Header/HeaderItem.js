import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import HeaderSubMenu from "./HeaderSubMenu";
import styles from "./Header.module.css";
import useOnClickOutsideRef from "../helper/handler";
import { AiOutlineCaretDown } from "react-icons/ai";

function HeaderItem({ title, data, link }) {
  const router = useRouter();
  const [activeLink, setactiveLink] = useState(false);
  const [subNavOpen, setSubNavOpen] = useState(false);
  const [subNavOpenAnim, setSubNavOpenAnim] = useState(false);

  const modalRef = useOnClickOutsideRef(subNavOpen, () => setSubNavOpen(false));

  useEffect(() => {
    if (router.pathname == link) {
      setactiveLink(true);
    } else {
      setactiveLink(false);
    }
    return () => {};
  }, [router]);

  const setNavOpen = (e) => {
    setSubNavOpenAnim(!subNavOpen);
    // setTimeout(() => {
    setSubNavOpen(!subNavOpen);
    // }, 500);
  };

  return (
    <div
      className={` relative group ${styles.main_header_item} `}
      onMouseEnter={() => setSubNavOpen(true)}
      onMouseLeave={() => setSubNavOpen(false)}
    >
      <Link href={`${link}`}>
        <>
          <h2
            onClick={data?.subnav && setNavOpen}
            className={` transition-all  ${
              activeLink ? "text-[#658E75]" : "text-black"
            }  uppercase flex items-center  m-2 font-normal text-lg tracking-wide cursor-pointer lg:text-lg lg:font-medium lg:tracking-wider xl:font-bold `}
          >
            {title}{" "}
            {data.subnav ? (
              <div className=" ml-1 overflow-hidden w-4 h-4">
                <AiOutlineCaretDown
                  className={`  ${
                    subNavOpen ? styles.arrowDown : styles.arrowUp
                  }`}
                />
              </div>
            ) : null}
          </h2>
          {activeLink ? (
            <div className=" rounded-full text-center mx-auto bg-black m-2 w-1 h-1 "></div>
          ) : (
            ""
          )}
        </>
      </Link>
      {data.subnav ? (
        <div
          ref={modalRef}
          className={` absolute -z-10 top-18  -left-2 transform -translate-x-1/3 xl:-left-32  overflow-hidden transition-all ease-in-out duration-500 h-0 w-max lg:group-hover:h-[600px] xl:group-hover:h-[450px]
           `}
        >
          <HeaderSubMenu data={data?.subnav} />
        </div>
      ) : null}
    </div>
  );
}

export default HeaderItem;
