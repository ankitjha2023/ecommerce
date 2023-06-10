import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import "./App.css"
import Footer from './components/Footer'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import About from './pages/About'

const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route exact path = "/" element = {<Home/>}/>
    <Route exact path = "/about" element = {<About/>}/>
    <Route exact path = "/products" element = {<Products/>}/>
    <Route exact path = "/cart" element = {<Cart/>}/>
    
    <Route exact path = "/product/:id" element = {<ProductDetails/>}/>
    <Route exact path = "/products/product/:id" element = {<ProductDetails/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
