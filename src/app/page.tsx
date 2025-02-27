import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";

const page = () => {
  return (
    <div className="back h-screen flex flex-col ">
      <Header />
      <Main />
    </div>
  );
};

export default page;
