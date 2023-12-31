import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        WELCOME TO SHOPPING CART
        
        
      </h1>
      <p className="mb-8 leading-relaxed">
      At our online store, we offer a wide range of high-quality products to meet your shopping needs. Whether you're looking for fashion, electronics, home appliances, or any other item, we have it all covered.
      </p>
      <Link to="/products"><button className=" inline-flex text-gray-100 bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
          Latest Products
        </button></Link>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img 
        className="object-contain object-center rounded h-80 mx-auto"
        alt="hero"
        src="/hero.png"
      />
    </div>
  </div>
</section>

  )   
}

export default Hero
