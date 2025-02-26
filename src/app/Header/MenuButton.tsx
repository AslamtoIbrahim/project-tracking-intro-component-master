'use client'
import React, { useState } from "react";
import Image from "next/image";
import open from "../../../public/source/images/icon-hamburger.svg";
import close from "../../../public/source/images/icon-close.svg";

type prop = {
  toggleMenu?: () => void;
};
const MenuButton = ({ toggleMenu }: prop) => {
  const [isOpen, setisOpen] = useState(false);
  const handelClick = () => {
    setisOpen(!isOpen);
    toggleMenu?.();
  };
  return (
    <button onClick={handelClick}>
      <Image  src={isOpen ? close : open} alt="Menu" width={20} height={20} />
    </button>
  );
};

export default MenuButton;
