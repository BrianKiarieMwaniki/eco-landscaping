"use client";

import Image from "next/image";
import { useState } from "react";
import NavLink from "../ui/NavLink";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <header className="p-4 w-full">
      <nav className="mx-auto container flex flex-row justify-between flex-wrap md:flex-nowrap">
        <a href="/" className="flex items-center justify-center">
          <Image src="/images/Logo.png" alt="logo" width={277} height={20} />
        </a>
        <button
          className="flex md:hidden cursor-pointer justify-center items-center"
          onClick={handleToggle}
        >
          <span className={`menu-icon ${isToggled ? "toggled" : ""}`}>
            &nbsp;
          </span>
        </button>
        <ul
          className={`md:flex items-center md:bg-transparent md:flex-row flex-col basis-auto md:basis-0 w-full list-none gap-4  ${
            isToggled ? "h-auto bg-light  mt-2" : "hidden"
          }`}
        >
          <li className="py-2 text-center md:py-0">
            <NavLink href="/" onClick={handleToggle}>
              Home
            </NavLink>
          </li>
          <li className="py-2 text-center md:py-0">
            <NavLink href="/about" onClick={handleToggle}>
              About
            </NavLink>
          </li>
          <li className="py-2 text-center md:py-0">
            <NavLink href="/services" onClick={handleToggle}>
              Services
            </NavLink>
          </li>
          <li className="py-2 text-center md:py-0">
            <NavLink href="/portfolio" onClick={handleToggle}>
              Portfolio
            </NavLink>
          </li>
          <li className="py-2 text-center md:py-0">
            <NavLink href="/contact" onClick={handleToggle}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
