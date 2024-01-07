import React from "react";
import { Link } from "react-router-dom";

import "./display.css"

const DisplayOne = () => {
  return (
    <div className="container mx-auto">
      <div className="display">
        <div className="display-item text-center space-y-8 py-4">
          <div className="text-5xl ">
            <span className="font-bold">Welcome to</span> <br />
            <span className="text-palevioletred">Hair Salon</span>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <p className="h-[2px] w-[60px] bg-zinc-400"></p>
            <span>
              <i className="fa fa-scissors text-zinc-400"></i>
            </span>
            <p className="h-[2px] w-[60px] bg-zinc-400"></p>
          </div>
          <p>
            Our small team of hair specialists, who are knowledgeable about the
            newest hair trends, haircuts, hairstyles, and popular color
            selections, is ready to help you look amazing and more confident.
          </p>
          <p className="uppercase text-palevioletred">
            <Link to="/readmore">Read more</Link>{" "}
            {/* Replace "/readmore" with the actual link */}
          </p>
        </div>
        <div className=" display-item">
          <img className="w-[100%] hover:translate-x-2 transition-all duration-75" src="images/beauty3.webp" alt="Beauty#" />
        </div>
        <div className="display-item bg-palevioletred text-white text-center flex-1 px-10 py-6 space-y-6 ">
          <h1 className="text-4xl font-bold">Opening Hours</h1>
          <div className="flex items-center justify-center space-x-2">
            <p className="h-[2px] w-[60px] bg-zinc-400"></p>
            <span>
              <i className="fa fa-scissors text-zinc-400"></i>
            </span>
            <p className="h-[2px] w-[60px] bg-zinc-400"></p>
          </div>
          <div>
            <p className="text-2xl">Mon - Fri</p>
            <p className="font-bold text-lg">10:00AM - 05:00PM</p>
          </div>
          <div>
            <p className="text-2xl">Saturday</p>
            <p className="font-bold text-lg">10:00AM - 05:00PM</p>
          </div>
          <div>
            <p className="text-2xl">Sunday</p>
            <p className="font-bold text-lg">Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayOne;
