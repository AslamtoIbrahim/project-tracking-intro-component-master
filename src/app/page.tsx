import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";

const page = () => {
  return (
    <div className="">
      <div className="bg-neutral-light-grayish-blue absolute -z-10 w-full h-1/2 left-1/2 rounded-bl-[5rem]"></div>
      <Header />
      <Main />
    </div>
  );
};

export default page;
