import React from "react";
import Image from "next/image";
import hero from "../../../public/source/images/illustration-devices.svg";
import Button from "./Button";

const Main = () => {
  return (
    <div className="h-screen grid grid-cols-1 grid-rows-2 px-6 ">
      <section className="w-full  bg-hero h-full bg-no-repeat bg-[length:155%] bg-[-1.2rem_2rem]">
        {/* <div className='bg-hero h-full w-full bg-no-repeat bg-[length:138%] bg-[0_8rem]'></div> */}
        {/* <Image className="h-auto " src={hero} alt="herom image" width={960} height={464} /> */}
      </section>
      <section className="w-full flex flex-col items-start gap-4">
        <div className="flex items-center gap-4 uppercase">
          <p className="bg-neutral-very-dark-blue font-bold font-barlowCond text-white tracking-wider rounded-full py-1 px-3 text-sm">New</p>
          <p className="text-neutral-dark-grayish-blue tracking-widest font-barlowCond">Monograph Dashboard</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-neutral-very-dark-blue text-3xl font-barlowCond font-bold">Powerful insights into your team</h1>
          <p className="text-neutral-dark-grayish-blue">Project planning and time tracking for agile teams</p>
        </div>
        <div className="flex items-center gap-2 whitespace-nowrap">
          <Button />
          <p className="uppercase text-sm text-neutral-dark-grayish-blue tracking-wider font-barlowCond">to see a live preview</p>
        </div>
      </section>
    </div>
  );
};

export default Main;
