import FooterHeadings from "./Footer/FooterHeadings";
import FooterSubMenu from "./Footer/FooterSubMenu";
import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import styled from "@emotion/styled";

const Footer = () => {
  return (
    <footer className=" mt-24 px-6 py-10  border-gray-200 border-t-2 md:px-10 lg:px-16  lg:max-w-screen-xl xl:mx-auto xl:px-28  xl:max-w-screen-2xl">
      <section className="flex w-full flex-wrap flex-col md:flex-row ">
        <div className="flex-[25%]">
          <FooterHeadings title="Policies & Legal" />
          <FooterSubMenu title="Priviacy Policy" path={"/"} />
          <FooterSubMenu title="Terms of use" path={"/"} />
          <FooterSubMenu title="Cookie Policy" path={"/"} />
          <FooterSubMenu title="Site Map" path={"/"} />
        </div>
        <div className="flex-[25%] mt-16 md:mt-0">
          <FooterHeadings title="Quick links" />
          <FooterSubMenu title="About us" path={"/"} />
          <FooterSubMenu title="Shop" path={"/"} />
          <FooterSubMenu title="Blogs" path={"/"} />
          <FooterSubMenu title="Subscription" path={"/"} />
        </div>
        <div className="flex-[25%] mt-16 md:mt-0">
          <FooterHeadings title="Accounts" />
          <FooterSubMenu title="My Account" path={"/"} />
          <FooterSubMenu title="Order Tracking" path={"/"} />
          <FooterSubMenu title="Wishlist " path={"/"} />
        </div>
        <div className="flex-[20%]  mt-16 md:mt-0  ">
          <div className=" ml-auto">
            <FooterHeadings title="Connect With us" />
            <IconsList>
              <li className="bg-[#1DA1F2]">
                <FaTwitter />
              </li>
              <li className="bg-[#0077B5]">
                {" "}
                <FaLinkedinIn />{" "}
              </li>

              <li className="bg-[#FF0000]">
                <FaYoutube />
              </li>
            </IconsList>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-baseline mt-16 font-Montserrat md:flex-row">
        <h2 className="text-lg sm:text-xl lg:text-2xl  ">Infoware Ecommerce</h2>
        <h4 className="text-base lg:text-xl">(C) 2022- All right reserved</h4>
      </section>
    </footer>
  );
};

export default Footer;

const IconsList = styled.ul`
  display: flex;
  margin-top: 10px;
  li {
    font-size: 25px;
    margin-right: 10px;
    border-radius: 50%;
    padding: 10px;
    color: #fff;
  }
`;
