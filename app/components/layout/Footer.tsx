import Image from "next/image";
import NavLink from "../ui/NavLink";

const Footer = () => {
  return (
    <footer className="p-4 w-full">
      <div className="container flex flex-col mx-auto ">
        <div className="flex-row flex flex-wrap justify-between space-y-2 space-x-10">
          <div className="lg:flex-1">
            <Image src="/images/Logo.png" alt="logo" width={237} height={17} />
            <span className="txt my-3 w-[230px] p-3 inline-block">
              Best Landscape Design & Maintenance services in the Columbus OH
            </span>
            <div className="flex ">
              <svg className="h-[32px] w-[32px]">
                <use xlinkHref="/icons/sprite.svg#facebook" />
              </svg>
              <svg className="h-[32px] w-[32px]">
                <use xlinkHref="/icons/sprite.svg#twitter" />
              </svg>
              <svg className="h-[32px] w-[32px]">
                <use xlinkHref="/icons/sprite.svg#instagram" />
              </svg>
              <svg className="h-[32px] w-[32px]">
                <use href="/icons/sprite.svg#youtube" />
              </svg>
            </div>
          </div>
          <div className="lg:flex 2">
            <div>
              <h6 className="txt-accent uppercase">ADDRESS</h6>
              <p className="txt mt-5">
                <span>Desa Bangsal Rt 11 Rw 02</span>
                <br />
                <span>Bangsal Mojokerto</span>
                <br />
                <span>Jawa timur Indonesia</span>
              </p>
              <p className="mt-5">
                <span>Phone: +1 800 123 45 67</span>
                <br />
                <span>Email: email@example.com</span>
              </p>
            </div>
          </div>
          <div className="lg:flex-2">
            <h6 className="txt-accent uppercase">NAVIGATION</h6>
            <ul className="space-y-4 mt-5">
              <li>
                <NavLink className="footer-navlink" href="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="footer-navlink" href="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="footer-navlink" href="/services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink className="footer-navlink" href="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink className="footer-navlink" href="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:flex-2">
            <h6 className="txt-accent uppercase">OUR SERVICES</h6>
            <ul className="list-none gap-3 flex flex-col mt-5">
              <li>
                <NavLink className="footer-navlink" href="#">
                  Garden design installation
                </NavLink>
              </li>
              <li>
                <NavLink className="footer-navlink" href="#">
                  Lawn maintenance
                </NavLink>
              </li>
              <li>
                <NavLink className="footer-navlink" href="#">
                  Hardscape construction
                </NavLink>
              </li>
              <li>
                <NavLink className="footer-navlink" href="/portfolio">
                  Irrigation systems
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between py-3">
          <p className="txt p-4">
            &copy; 2024 Eco landscaping services{" "}
            <span>All rights reserved</span>
          </p>
          <p className="p-4">
            <span>
              <NavLink href="/privary-policy" className="txt">
                Pricacy Policy
              </NavLink>
            </span>
            &nbsp; &nbsp; &nbsp;
            <span>
              <NavLink href="/tcs" className="txt">
                Terms and Conditions
              </NavLink>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
