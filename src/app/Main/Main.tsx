import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 grid-rows-2 md:gap-12 ">
      <section className="w-full  bg-hero h-full bg-no-repeat bg-[length:155%] xxs:bg-[-0.4rem_2rem] xs:bg-[-0.5rem_1rem] 
      md:bg-[length:95%] md:bg-[0.5rem_1rem]"></section>
      <section className="w-full flex flex-col items-start gap-4 px-6 md:px-8">
        <div className="flex items-center gap-4 uppercase">
          <p className="bg-neutral-very-dark-blue font-bold font-barlowCond text-white tracking-wider rounded-full py-1 px-3 text-sm
          md:text-base">New</p>
          <p className="text-neutral-dark-grayish-blue tracking-widest font-barlowCond md:text-xl">Monograph Dashboard</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-neutral-very-dark-blue text-3xl md:text-4xl font-barlowCond font-bold">Powerful insights into your team</h1>
          <p className="text-neutral-dark-grayish-blue text-xl">Project planning and time tracking for agile teams</p>
        </div>
        <div className="flex items-center gap-2 md:gap-4 whitespace-nowrap">
          <Button />
          <p className="uppercase text-sm md:text-base text-neutral-dark-grayish-blue tracking-wider font-barlowCond">to see a live preview</p>
        </div>
      </section>
    </div>
  );
};

export default Main;
