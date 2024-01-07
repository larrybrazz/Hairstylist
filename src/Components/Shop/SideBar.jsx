import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SideBar = () => {
  const tags = [
    {
      tagName: "Conditoner",
    },
    {
      tagName: "Hair Care for men",
    },
    {
      tagName: "Hair color",
    },
    {
      tagName: "makeup & cosmetics",
    },
    {
      tagName: "shampoo",
    },
    {
      tagName: "styling products",
    },
    {
      tagName: "Tools",
    },
    {
      tagName: "uncategorized",
    },
  ];
  
    return (
      <>
        <div className="space-y-4">
          <div className="bg-white text-center shadow-lg">
            <div className="border-2 p-4 space-y-4">
              <h1 className="space-x-4">
                <span className="text-4xl font-bold">Categories</span>{" "}
              </h1>
              <div className="flex justify-center items-center space-x-2">
                <p className="h-[2px] w-[60px] bg-zinc-300"></p>
                <span>
                  <i className="fa fa-scissors text-zinc-300"></i>
                </span>
                <p className="h-[2px] w-[60px] bg-zinc-300"></p>
              </div>
              <div className="space-y-6 font-semibold">
                {tags.map((tag) => (
                  <ul className="uppercase hover:text-palevioletred">
                    <li className="">{tag.tagName}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white text-center shadow-lg space-y-2 py-4 px-2">
            <div className="space-x-4">
              <h1 className="text-4xl font-bold">Newsletter</h1>{" "}
              <h1 className="text-3xl text-palevioletred font-bold">SignUp</h1>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <p className="h-[2px] w-[60px] bg-zinc-300"></p>
              <span>
                <i className="fa fa-scissors text-zinc-300"></i>
              </span>
              <p className="h-[2px] w-[60px] bg-zinc-300"></p>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <p className="h-[2px] w-[60px] bg-white"></p>
              <span>
                <i className="fa fa-scissors text-white"></i>
              </span>
              <p className="h-[2px] w-[60px] bg-white"></p>
            </div>
            <form className="space-y-6" action="">
              <input className="outline-none border-b border-black" type="text" placeholder="Enter your email address" />
              <button className="uppercase py-3 px-6 bg-palevioletred text-white font-bold ">Suscribe</button>
            </form>
          </div>
        </div>
      </>
    );
};

export default SideBar;
