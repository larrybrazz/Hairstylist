import React, { useState } from 'react'
import "./shop.css"
import ModelDsiplay from './ModelDsiplay';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../Redux/Slice/shoppingSlice';


const ShopContent = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [display, setDisplay] = useState(false);
  const [modelDisplayItem, setModelDisplayItem] = useState()
     
    const shopData = [
        {
            id: 1,
            img: "shop/item.webp",
            title: "Alterna Canviar",
            price:12
        },
        {
            id: 2,
            img: "shop/item1.webp",
            title: "Alterna Canviar",
            price:18
        },
        {
            id: 3,
            img: "shop/item2.webp",
            title: "Alterna Canviar",
            price:12
        },
        {
            id: 4,
            img: "shop/item3.webp",
            title: "Alterna Canviar",
            price:32
        },
        {
            id: 5,
            img: "shop/item4.webp",
            title: "Alterna Canviar",
            price:19
        },
        {
            id: 6,
            img: "shop/item5.webp",
            title: "Alterna Canviar",
            price:12
        },
        {
            id: 7,
            img: "shop/item6.webp",
            title: "Alterna Canviar",
            price:22
        },
        {
            id: 8,
            img: "shop/item7.webp",
            title: "Alterna Canviar",
            price:82
        },
        {
            id: 9,
            img: "shop/item8.webp",
            title: "Alterna Canviar",
            price:2
        },
        {
            id: 10,
            img: "shop/item9.webp",
            title: "Alterna Canviar",
            price:12
        },
        {
            id: 11,
            img: "shop/item10.webp",
            title: "Alterna Canviar",
            price:12
        },
  ]
  
  const handleModelDisplay = (item) => {
    setModelDisplayItem(item)
    setDisplay(prev=>!prev)
  }
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    // setQuantity((prev) => prev + 1);
  };

 
  return (
    <div>
      <div className={display ? "model-display open" : "model"}>
        <div
          onClick={() => setDisplay(false)}
          className="absolute top-0 bg-white flex items-end m-4 py-2 px-3 rounded-full"
        >
          <span>
            {" "}
            <i className="fa fa-close"></i>{" "}
          </span>
        </div>
        {display && <ModelDsiplay modelDisplayItem={modelDisplayItem} />}
      </div>
      <div className="bg-white shadow-lg m-1 p-4">
        <div className="space-x-4">
          <span>
            <i className="fa-solid fa-grip-vertical text-2xl"></i>
          </span>
          <span>
            <i className="fa-solid fa-list text-2xl"></i>
          </span>
        </div>
        <div></div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 m-1">
        {shopData.map((item) => (
          <div className="space-y-12 bg-white shadow-lg px-8 py-4">
            <div className="shop-img">
              <img className='w-[100%] h-[100%]' src={item.img} alt="" />
              <div className="overlay">
                <span onClick={() => handleModelDisplay(item)}>
                  <i className="fa fa-eye text-palevioletred text-2xl"></i>
                </span>
              </div>
            </div>

            <p className="uppercase hover:text-palevioletred">ALterna Caviar</p>
            <div className="flex justify-between items-center border-t-2 py-4">
              <span className="text-xl text-palevioletred ">${ item.price}.00</span>
              <span
                onClick={() => handleAddToCart(item)}
                className="border-2 p-2 rounded-full text-center text-palevioletred hover:bg-palevioletred hover:text-white"
              >
                <i className="fa fa-cart-plus"></i>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopContent