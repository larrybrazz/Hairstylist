import React from "react";
import "./contact.css";
const ContactHeader = () => {
  return (
    <div className="container-header font-bold ">
      <div className=" bg-palevioletred p-4">
        <div className="container mx-auto  flex flex-wrap bg-palevioletred items-center justify-between ">
          <h1 className="uppercase text-4xl ">Contact</h1>
          <div>Home . Contact</div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
