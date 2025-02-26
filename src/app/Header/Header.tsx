'use client'
import React, { useState } from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

const Header = () => {
  const [openMenu, setopenMenu] = useState(false);
  const toggleMenu = () => setopenMenu(!openMenu);
  return (
    <div className="relative transition-all duration-300 ease-in-out ">
      <nav className="w-full flex items-center justify-between p-8">
        <Logo />
        <MenuButton toggleMenu={toggleMenu} />
      </nav>
      {openMenu && <Menu styles={`${openMenu ? `opacity-100` : `opacity-0`}`} />}
    </div>
  );
};

export default Header;
