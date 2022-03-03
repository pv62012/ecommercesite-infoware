import Link from "next/link";
import React from "react";

const FooterSubMenu = ({ title, path }) => {
  return (
    <div>
      <Link href={`${path}`}>
        <p className="text-[#242424] cursor-pointer font-normal text-xl mt-3">
          {title}
        </p>
      </Link>
    </div>
  );
};

export default FooterSubMenu;
