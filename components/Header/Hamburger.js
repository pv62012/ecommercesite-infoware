import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sidebarOpen } from "../../redux/actions/frontEndActions";
import { SIDEBAR_OPEN } from "../../redux/constants/frontEndConstants";
function Hamburger() {
  const { open } = useSelector((state) => state.frontEnd);
  const dispatch = useDispatch();
  const handleSidebar = (e) => {
    e.preventDefault();
    // dispatch({
    //   type: SIDEBAR_OPEN,
    //   open: !open,
    // });
    dispatch(sidebarOpen());
  };
  return (
    <div>
      <div
        className=" z-50 flex flex-col justify-around w-8 h-7 bg-transparent border-none cursor-pointer p-0 m-3 lg:hidden"
        onClick={handleSidebar}
      >
        <div
          className={`bg-black w-4 h-1 origin-right rounded-3xl transform duration-500  
            }`}
        />
        <div
          className={`bg-black w-7 h-1 rounded-3xl transform duration-500`}
        />
        <div
          className={`bg-black w-[22px] h-1 rounded-3xl origin-right transform duration-500`}
        />
      </div>
    </div>
  );
}

export default Hamburger;
