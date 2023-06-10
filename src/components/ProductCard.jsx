import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full text-center">
        <Link className="block relative h-48 rounded overflow-hidden " to={`product/${product.id}`}>
          <img
            alt="ecommerce"
            className="object-contain object-center w-full h-full block"
            src={product.image}
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {product.category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium uppercase">
            {product.title.substring(0,20)}
          </h2>
          <p className="mt-1 text-xl font-medium">${product.price}</p>
        </div>
      </div>
  )
}

export default ProductCard
