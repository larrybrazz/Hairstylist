import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import Header from './Header'
import { getTotals } from '../../Redux/Slice/shoppingSlice'

const MappedCartItems = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
   
   useEffect(() => {
        dispatch(getTotals());
    },[cart, dispatch])
    return (
      <>
        <Header />
        <div className="container mx-auto h-full">
          <table className="w-full my-4">
            <thead>
              <tr className="md:text-2xl">
                <th className="w-1/6 p-2"></th>
                <th className="w-2/6 p-2">Product</th>
                <th className="w-1/6 p-2">Price</th>
                <th className="w-1/6 p-2">Quantity</th>
                <th className="w-1/6 p-2">Subtotal</th>
              </tr>
            </thead>
          </table>
          {cart.cartItems.length === 0 ? (
            <div className="font-semibold w-11/12 mx-auto space-y-8 ">
              <p> Cart is Empty</p>
              <Link className="text-blue-300 text-2xl" to="/shop">
                Click here to Start Shopping
              </Link>
            </div>
          ) : (
            cart.cartItems.map((item) => <Cart key={item.id} item={item} />)
          )}
          <div className=" space-y-6 my-6">
            <div className="flex justify-between text-lg">
              <p>Cart Total</p>
              <p>${cart.cartTotalAmount}</p>
            </div>
            <div className="flex justify-between space-x-4 my-4">
              <button className="bg-palevioletred uppercase py-4 px-8 text-lg text-white font-semibold">
                {" "}
                <Link to="/shop">Continue Shopping</Link>
              </button>
              <button className="bg-palevioletred uppercase py-4 px-8 text-lg text-white font-semibold">
                {" "}
                <Link to={`${cart.cartItems.length === 0 ? "" : "/checkout"}`}>
                  Proceed To Checkout
                </Link>
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default MappedCartItems