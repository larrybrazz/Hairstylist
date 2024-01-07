import React from 'react'
import "./header.css"
const Header = () => {
    return (
      <div className="container-header font-bold">
        <div className=" bg-palevioletred p-4">
          <div className="container mx-auto  flex flex-wrap bg-palevioletred items-center justify-between ">
            <h1 className="uppercase text-4xl ">Services</h1>
            <div>Home . Services</div>
          </div>
        </div>
      </div>
    );
}

export default Header