import Image from "next/image";
import NavLink from "../ui/NavLink";

const Footer = () => {
  return (
    <footer className="p-4 w-full">
      <div className="container flex flex-col mx-auto ">
        <div className="flex flex-row w-full space-x-4">
          <div className="flex flex-col   border border-orange-600">
            <Image src="/images/Logo.png" alt="logo" width={237} height={17} />
            <span className="txt my-5 w-[230px] p-3">
              Best Landscape Design & Maintenance services in the Columbus OH
            </span>
            <div className="flex flex-row flex-nowrap gap-5">
              <svg>
                <use href="/icons.svg#Facebook" />
              </svg>
              <svg>
                <use href="/icons.svg#Twitter" />
              </svg>
              <svg>
                <use href="/icons.svg#Instagram" />
              </svg>
              <svg>
                <use href="/icons.svg#Youtube" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <h6 className="txt-accent uppercase">ADDRESS</h6>
            <p className="txt mt-5">
              <span>Desa Bangsal Rt 11 Rw 02</span><br/>
              <span>Bangsal Mojokerto</span><br/>
              <span>Jawa timur Indonesia</span>
            </p>
            <p className="mt-5">
              <span>Phone: +1 800 123 45 67</span><br/>
              <span>Email: email@example.com</span>
            </p>
          </div>
          <div className="flex flex-col">
            <h6 className="txt-accent uppercase">NAVIGATION</h6>
            <ul className="list-none gap-2 flex flex-col mt-5">
              <li>
                <NavLink className="txt" href="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="txt" href="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="txt" href="/services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink className="txt" href="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink className="txt" href="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h6 className="txt-accent uppercase">OUR SERVICES</h6>
            <ul className="list-none gap-3 flex flex-col mt-5">
              <li>
                <NavLink className="txt" href="#">
                  Garden design installation
                </NavLink>
              </li>
              <li>
                <NavLink className="txt" href="#">
                  Lawn maintenance
                </NavLink>
              </li>
              <li>
                <NavLink className="txt" href="#">
                  Hardscape construction
                </NavLink>
              </li>
              <li>
                <NavLink className="txt" href="/portfolio">
                  Irrigation systems
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between py-3">
          <p className="txt">
            &copy; 2024 Eco landscaping services{" "}
            <span>All rights reserved</span>
          </p>
          <p>
            <span>
              <NavLink href="/privary-policy" className="txt">
                Pricacy Policy
              </NavLink>
            </span>
            &nbsp;
            &nbsp;
            &nbsp;
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
