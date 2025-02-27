import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <div className="h-full grid grid-cols-1 grid-rows-2 md:gap-12 lg:grid-cols-2 lg:grid-rows-1
    lg:pt-12 ">

      <section className="w-full  bg-hero h-full bg-no-repeat bg-[length:155%] xxs:bg-[-0.4rem_2rem] xs:bg-[-0.5rem_1rem] 
      md:bg-[length:95%] lg:bg-[length:163%] xl:bg-[length:140%] md:bg-[-1.5rem_0rem] lg:col-start-2"></section>

      <section className="w-full flex flex-col items-start gap-4 px-6 md:px-8 lg:px-10 xl:pl-40 lg:col-start-1 lg:row-start-1
      lg:pt-8 lg:gap-10 xl:gap-20">
        <div className="flex items-center gap-4 xl:gap-6 uppercase">
          <p className="bg-neutral-very-dark-blue font-bold font-barlowCond text-white tracking-wider rounded-full py-1 px-3 text-sm
          md:text-base lg:text-xl xl:text-2xl">New</p>
          <p className="text-neutral-dark-grayish-blue tracking-widest font-barlowCond md:text-xl lg:text-2xl 
          xl:text-3xl">Monograph Dashboard</p>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6 xl:gap-8">
          <h1 className="uppercase text-neutral-very-dark-blue text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-barlowCond font-bold">Powerful insights into your team</h1>
          <p className="text-neutral-dark-grayish-blue text-xl lg:text-2xl xl:text-4xl">Project planning and time tracking for agile teams</p>
        </div>
        <div className="flex items-center gap-2 md:gap-4 whitespace-nowrap lg:gap-4 xl:gap-6">
          <Button />
          <p className="uppercase text-sm md:text-base lg:text-xl xl:text-2xl text-neutral-dark-grayish-blue tracking-wider font-barlowCond">to see a live preview</p>
        </div>
      </section>
    </div>
  );
};

export default Main;
