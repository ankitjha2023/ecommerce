import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <img src="/logo.png" alt="logo" width={30} />
      <span className="ml-3 text-xl">Shopping Cart</span>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-gray-900 text-xl" to="/">Home</Link>
      <Link className="mr-5 hover:text-gray-900 text-xl" to="/about">About</Link>
      <Link className="mr-5 hover:text-gray-900 text-xl" to="/products">Products</Link>
      
    </nav>
    <Link to="/cart"><button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none bg-blue-500 hover:bg-gray-500 rounded text-gray-100 mt-4 md:mt-0">
      Cart
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button></Link>
  </div>
</header>

  )
}

export default Navbar
