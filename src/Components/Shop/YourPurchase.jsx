import React from 'react'
import { useSelector } from 'react-redux';

const YourPurchase = () => {
  const cart = useSelector((state) => state.cart)
  
  console.log(cart.cartItems)
  return (
    <div className="text-black container mx-auto text-center p-16 bg-pink-50 space-y-6 h-[100vh]">
      <h1 className="text-4xl">Your Purchase</h1>
      {cart.cartItems.map((item) => (
        <div className="grid gap-8 grid-cols-2 p-4 bg-white">
          <p className="uppercase text-xl">Product</p>
          <p className="uppercase text-xl">Subtotal</p>
          <p className="">
            <span>{item.title}</span> x<span>{cart.cartQuantity}</span>
          </p>
          <p className="uppercase text-xl">${item.price}</p>
        </div>
      ))}
      <div className="grid gap-5 grid-cols-2 p-4 bg-white">
        <p className="uppercase text-xl">Subtotal</p>
        <p className="uppercase text-xl">${cart.cartTotalAmount}</p>
        <p className="uppercase text-xl">Total</p>
        <p className="uppercase text-xl">${cart.cartTotalAmount}</p>
      </div>
      
    </div>
  );
}

export default YourPurchase