import React from 'react'

const AboutDisplayOne = () => {
  return (
    <div className="displayone-container text-center">
      <div className="">
        <div className="border-4 border-orange-800 flex justify-center items-center flex-wrap text-black">
          <div className=" border-r border-orange-800 p-20 space-y-4">
            <p className="text-6xl">3</p>
            <p className="text-2xl">Locations</p>
          </div>
          <div className=" border-r border-orange-800 p-20 space-y-4">
            <p className="text-6xl">34</p>
            <p className="text-2xl">Staffs</p>
          </div>
          <div className="p-20 space-y-4">
            <p className="text-6xl">21</p>
            <p className="text-2xl">Years</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDisplayOne