"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import Navigation from "./Navigation";

const Header = () => {
  const [openMenu, setopenMenu] = useState(false);
  const toggleMenu = () => setopenMenu(!openMenu);
  return (
    <div className="relative transition-all duration-300 ease-in-out ">
      <nav className="w-full flex items-center justify-between p-6 md:p-10 lg:p-12 xl:px-40 xl:py-16">
        <Logo />
        <MenuButton toggleMenu={toggleMenu} />
        <Navigation />
      </nav>
      {openMenu && (
        <Menu styles={`${openMenu ? `opacity-100` : `opacity-0`}`} />
      )}
    </div>
  );
};

export default Header;
