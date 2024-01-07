import React, { useState, useNavigate } from "react";
import "./shop.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
    const cart = useSelector((state) => state.cart);
    
  return (
    <div className="container-header font-bold ">
      <div className=" bg-palevioletred p-4">
        <div className="container mx-auto  flex flex-wrap bg-palevioletred items-center justify-between ">
          <h1 className="uppercase text-4xl ">Shop</h1>
          <div className="flex">
            Home . Shop .{" "}
            <Link to="/mappedcartitems">
              <div className="relative">
                <span className="text-2xl">
                  {" "}
                  <i className="fa fa-cart-plus"></i>{" "}
                </span>
                              <span className="absolute">{cart.cartItems.length }</span>           
              </div>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
