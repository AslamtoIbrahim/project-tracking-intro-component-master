import React from 'react'
import { navLinks } from "../data";
import Login from "./Login";

const Navigation = () => {
  return (
    <div className='hidden md:flex items-center gap-8 lg:gap-10 xl:gap-12'>
        <ul className="w-full  flex items-center gap-4 lg:gap-6 xl:gap-8  ">
        {navLinks.map((link, i) => {
          return (
            <li key={i} className="">
              <a className="uppercase font-barlowCond font-semibold tracking-wider
              text-xl hover:underline" href={link.href}>{link.name}</a>
            </li>
          );
        })}
      </ul>
      <Login />
    </div>
  )
}

export default Navigation
