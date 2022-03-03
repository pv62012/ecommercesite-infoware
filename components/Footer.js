import FooterHeadings from "./Footer/FooterHeadings";
import FooterSubMenu from "./Footer/FooterSubMenu";
import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import styled from "@emotion/styled";

const Footer = () => {
  return (
    <footer className=" mt-24 px-8 py-10  border-gray-200 border-t-2 lg:px-20 lg:max-w-screen-xl xl:mx-auto  xl:max-w-screen-2xl">
      <section className="flex flex-wrap flex-col md:flex-row ">
        <div className="flex-[25%]">
          <FooterHeadings title="Policies & Legal" />
          <FooterSubMenu title="Priviacy Policy" path={"/loginsinf"} />
          <FooterSubMenu title="Terms of use" path={"/loginsinf"} />
          <FooterSubMenu title="Cookie Policy" path={"/loginsinf"} />
          <FooterSubMenu title="Site Map" path={"/loginsinf"} />
        </div>
        <div className="flex-[25%] mt-16 md:mt-0">
          <FooterHeadings title="Why Counce International" />
          <FooterSubMenu title="About us" path={"/loginsinf"} />
          <FooterSubMenu title="Our Alumini" path={"/loginsinf"} />
          <FooterSubMenu title="Featured Insights" path={"/loginsinf"} />
          <FooterSubMenu title="Subscription" path={"/loginsinf"} />
        </div>
        <div className="flex-[25%] mt-16 md:mt-0">
          <FooterHeadings title="Join our Network Group" />
          <FooterSubMenu
            title="Become Professional Partner"
            path={"/loginsinf"}
          />
          <FooterSubMenu
            title="Join Learner’s  Community"
            path={"/loginsinf"}
          />
          <FooterSubMenu title="Login  " path={"/loginsinf"} />
        </div>
        <div className="flex-[20%] mt-16 md:mt-0  ">
          <div className="ml-10">
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
        <h2 className="text-lg sm:text-xl lg:text-2xl  ">
          Counce International LLP.
        </h2>
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
