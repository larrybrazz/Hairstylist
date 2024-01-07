import React, { useState } from 'react'
import "./shop.css"
import { addToCart } from '../../Redux/Slice/shoppingSlice';
import { useDispatch } from 'react-redux';
const ModelDsiplay = ({modelDisplayItem}) => {
        const dispatch = useDispatch()
        const [activeLink, setActiveLink] = useState(modelDisplayItem.img); // State to track the active link
        const [imagePosition, setImagePosition] = useState("0%"); // State to track the image to display

       
  
        const handleLinkClick = (imageName) => {
          setActiveLink(imageName); 
        };
  return (
    <div className="">
      <div className="grid gap-4 bg-white md:grid-cols-2">
        <div className="grid gap-4 grid-cols-2 p-4">
          <div className="space-y-4">
            <div
              className={`p-6 md:p-8 ${
                activeLink == "images/beauty4.webp"
                  ? "border-r-2 border-palevioletred"
                  : ""
              }`}
              onClick={() => handleLinkClick(modelDisplayItem.img)}
            >
              <img className="" src={modelDisplayItem.img} alt="" />
            </div>
            <div
              className={`p-6 md:p-8 ${
                activeLink === "images/beauty5.webp"
                  ? "border-r-2 border-palevioletred"
                  : ""
              }`}
              onClick={() => handleLinkClick("images/beauty5.webp")}
            >
              <img className="" src="images/beauty5.webp" alt="" />
            </div>
          </div>
          <div
            className="image-container"
            style={{ transform: `translateX(${imagePosition})` }}
          >
            <img className="h-[100%]" src={`${activeLink}`} alt="" />
          </div>
        </div>
        <div className="p-4 space-y-6">
          <p className="uppercase hover:text-palevioletred">ALterna Caviar</p>
          <p className="text-xl text-palevioletred ">
            ${modelDisplayItem.price}
          </p>
          <div className="space-x-6">
            <span className="border p-4 text-center">{modelDisplayItem.cartQuantity}</span>
            <span
              onClick={() => dispatch(addToCart(modelDisplayItem))}
              className="uppercase py-4 px-6 bg-palevioletred text-white font-bold cursor-pointer "
            >
              Add To Cart
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            reiciendis, id officiis cum magni consequatur soluta error
            repudiandae voluptatum ad nihil fugit. Excepturi quasi aspernatur
            eveniet libero corrupti dolorem veritatis!
          </p>
          <div className="space-x-4">
            <span className="bg-blue-500 text-white rounded p-1">
              <i className="fa fa-facebook"></i> share 0
            </span>
            <span className="bg-blue-300 text-white rounded-lg p-1">
              <i className="fa fa-twitter"></i> Tweet{" "}
            </span>
            <span className="bg-red-500 text-white rounded p-1">
              <i className="fa fa-facebook"></i> Save{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelDsiplay