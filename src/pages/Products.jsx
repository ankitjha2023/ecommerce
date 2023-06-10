import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import Category from '../components/Category';


const Products = () => {
  const classes = "lg:w-1/4 md:w-1/2 w-full";
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const filterItem = async (category) => {
    setIsLoading(true);
    let url;
    if (category === 'all') {
      url = 'https://fakestoreapi.com/products';
    } else {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setIsLoading(false);
      setProducts(data); // Set all products instead of filtered products
    } catch (error) {
      console.log(error);
    }
  };
  

  if (isLoading) {
    return (
      <div className="flex container mx-auto flex-wrap">
        <Loading className={classes} />
        <Loading className={classes} />
        <Loading className={classes} />
        <Loading className={classes} />
      </div>
    );
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <h1 className="title-font sm:text-4xl text-3xl mb-12 font-medium text-gray-900 text-center">
          Featured Categories
        </h1>
        <Category filter={filterItem} />
        <div className="flex flex-wrap -m-4">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
      
    </section>
  );
};

export default Products;
