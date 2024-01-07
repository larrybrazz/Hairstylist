import React from "react";
import "../Services/header.css";
const AboutHeader = () => {
  return (
    <div className="container-header font-bold">
      <div className=" bg-palevioletred p-4">
        <div className="container mx-auto  flex flex-wrap bg-palevioletred items-center justify-between ">
          <h1 className="uppercase text-4xl ">About</h1>
          <div>Home . About</div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
