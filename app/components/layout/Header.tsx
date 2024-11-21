"use client";

import React, { useState } from "react";
import Navlink from "../ui/Navlink";
import Image from "next/image";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <header className="p-4 w-full">
      <nav className="mx-auto container flex flex-row justify-between flex-wrap md:flex-nowrap">
        <a href="/" className="flex items-center justify-center">
          <Image src="/Logo.png" alt="logo" width={277} height={20} />
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
            <Navlink href="/" onClick={handleToggle}>
              Home
            </Navlink>
          </li>
          <li className="py-2 text-center md:py-0">
            <Navlink href="/about" onClick={handleToggle}>
              About
            </Navlink>
          </li>
          <li className="py-2 text-center md:py-0">
            <Navlink href="/services" onClick={handleToggle}>
              Services
            </Navlink>
          </li>
          <li className="py-2 text-center md:py-0">
            <Navlink href="/portfolio" onClick={handleToggle}>
              Portfolio
            </Navlink>
          </li>
          <li className="py-2 text-center md:py-0">
            <Navlink href="/contact" onClick={handleToggle}>
              Contact
            </Navlink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
