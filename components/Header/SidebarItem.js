import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SidebarSubMenu from "./SidebarSubMenu";
import styles from "./Header.module.css";
import { AiOutlineCaretDown } from "react-icons/ai";

function SidebarItem({ title, link, data }) {
  const router = useRouter();
  const [activeLink, setactiveLink] = useState(false);
  const [subNavOpen, setSubNavOpen] = useState(false);

  useEffect(() => {
    if (router.pathname == link) {
      setactiveLink(true);
    } else {
      setactiveLink(false);
    }
    return () => {};
  }, [router]);

  return (
    <div className="uppercase m-2  tracking-wider">
      <Link href={`${link}`}>
        <h2
          className={` flex justify-between font-bold text-lg cursor-pointer mr-10 ${styles} ${
            activeLink ? "text-[#658e75]" : "text-black"
          } `}
        >
          {title}{" "}
          {data.subnav ? (
            <AiOutlineCaretDown
              onClick={(e) => setSubNavOpen(!subNavOpen)}
              className={` transition-all duration-500 ${
                subNavOpen ? styles.arrowDown : styles.arrowUp
              }`}
            />
          ) : null}
        </h2>
      </Link>
      {data.subnav ? (
        <div
          className={` mt-1 ${
            subNavOpen ? styles.dropDownDiv : styles.dropUpDiv
          }
           `}
        >
          <SidebarSubMenu data={data?.subnav} />
        </div>
      ) : null}
    </div>
  );
}

export default SidebarItem;
