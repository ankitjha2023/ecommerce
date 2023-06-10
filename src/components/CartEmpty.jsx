import React from 'react'
import { Link } from 'react-router-dom'

const CartEmpty = () => {
  return (
    <section className="text-gray-600 body-font pb-24 pt-12">
    <div className="container mx-auto flex px-5  items-center justify-center flex-col">
      <img
        className="lg:w-2/6 md:w-3/6 w-5/6 object-contain object-center"
        alt="hero"
        src="/cart.jpg" width={300}
      />
      <div className="text-center lg:w-2/3 w-full">
       
        <p className='text-lg mb-5 text-center'>Looks Like you have not added anything to your cart.  
        Go ahead & explore top categories.</p>
     <Link to="/products"> <button className="ml-4 inline-flex text-gray-100  border-0 py-2 px-6 focus:outline-none bg-indigo-600 hover:bg-gray-500 rounded text-lg ">
            SHOP NOW
          </button></Link>
      </div>
    </div>
  </section>
  
  )
}

export default CartEmpty
