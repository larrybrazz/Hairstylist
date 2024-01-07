import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, decreaseCart, removeFromCart } from '../../Redux/Slice/shoppingSlice';

const Cart = ({ item }) => {
    const dispatch = useDispatch();

    const removeItem = (item) => {
        dispatch(removeFromCart(item))
    }

     const increaseCartItem = (item) => {
       dispatch(addToCart(item));
       setQuantity((prev) => prev + 1);
     };

     const decreaseCartItem = (item) => {
       dispatch(decreaseCart(item));
       setQuantity((prev) => (prev === 0 ? 0 : prev - 1));
     };

  return (
    <div className="space-y-4 my-14">
      <table className="w-full text-sm md:text-xl">
        <tbody className="text-center">
          <tr className="border-y-2 relative p-">
            <td className="w-1/6  space-x-2">
              <img className="" src={item.img} alt="" />
            </td>
            <td className="w-2/6">{item.title}</td>
            <td className="w-1/6">${item.price}</td>
            <td className="w-1/6">
              <div className="border flex justify-between p-2 ">
                <span onClick={() => decreaseCartItem(item)}>-</span>
                <span>{item.cartQuantity}</span>
                <span onClick={() => increaseCartItem(item)}>+</span>
              </div>
            </td>
            <td className="w-1/6">${item.price * item.cartQuantity}</td>
            <span
              onClick={() => removeItem(item)}
              className="absolute text-lg right-0 md:top-0 md:text-2xl"
            >
              {" "}
              <i className="fa fa-close"></i>
            </span>{" "}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart