import React from "react";
import { navLinks } from "../data";
import Login from "./Login";

type prop = {
    styles: string;
}
const Menu = ({styles} : prop) => {
  return (
    <div className={`w-[90%] flex flex-col items-center justify-center gap-4 bg-white rounded-md shadow-xl p-8 
     absolute left-1/2 -translate-x-1/2 
     ${styles}`}>
      <ul className="w-full  flex flex-col items-center justify-center gap-4 text-center">
        {navLinks.map((link, i) => {
          return (
            <li key={i} className="">
              <a className="uppercase font-barlowCond font-semibold tracking-wider
              text-xl hover:underline" href={link.href}>{link.name}</a>
            </li>
          );
        })}
      </ul>
      <hr className="border-neutral-very-dark-blue/30 w-full " />
      <Login />
    </div>
  );
};

export default Menu;
