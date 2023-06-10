import React, { useState, useEffect } from 'react';

import CartEmpty from './CartEmpty';

const CartItem = ({onClick}) => {
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);
  }, []);

  const updateQuantity = (id, operation) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        let updatedQuantity = item.quantity;
        if (operation === '-') {
          // Check if quantity is already 1
          if (updatedQuantity > 1) {
            updatedQuantity -= 1;
          }
        } else if (operation === '+') {
          updatedQuantity += 1;
        }
        return {
          ...item,
          quantity: updatedQuantity,
        };
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  if (cart.length === 0) {
    return <CartEmpty />;
  }

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="flex flex-wrap -m-4 text-center py-24">
      <div className="p-4 md:w-3/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-wrap">
          {cart.map((item) => (
            <div className="p-4 md:w-1/3   w-full relative" key={item.id}>
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <button
                  className="absolute left-8 top-5 text-xl font-medium"
                  onClick={() => removeFromCart(item.id)}
                >
                  X
                </button>
                <img src={item.image} alt={item.title} className="mx-auto h-32" />
                <h2 className="text-xl my-2">{item.title.slice(0, 20)}</h2>
                <div className="flex justify-center align-center  gap-3 my-3">
                  <button onClick={() => updateQuantity(item.id, '-')} className="text-3xl text-red-500">
                    -
                  </button>
                  <span className="border p-2 text-xl">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, '+')} className="text-3xl text-green-500 text-bold">
                    +
                  </button>
                </div>
                <b className="text-xl">${(item.price * item.quantity).toFixed(2)}</b>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <h2 className="title-font font-medium text-2xl text-gray-900 mb-4">Cart Summary</h2>
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg">Total Items:</span>
            <span className="text-lg">{totalItems}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg">Total Price:</span>
            <span className="text-lg">${totalPrice.toFixed(2)}</span>
          </div>
          <button className="mt-6 py-2 px-4 text-white bg-blue-500 rounded hover:bg-blue-600" onClick={onClick}>
            ORDER NOW
          </button>

        </div>
      </div>
    </div>
  );
};

export default CartItem;
