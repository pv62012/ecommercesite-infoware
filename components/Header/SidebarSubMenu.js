import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const SidebarSubMenu = ({ data }) => {
  return (
    <ul className=" list-disc">
      {" "}
      {data?.map((data, index) => (
        <li key={index} className="text-base font-semibold  ">
          {" "}
          {/* <VscDebugBreakpointLog className=" flex-none mr-1" /> */}
          {data?.title}
        </li>
      ))}
    </ul>
  );
};

export default SidebarSubMenu;
