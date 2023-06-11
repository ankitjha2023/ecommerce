import React, { useState } from 'react'
import CartItem from '../components/CartItem'
import Alert from '../components/Alert'

const Cart = () => {
  const [alert, setAlert] = useState(false)
  const handleClick = ()  =>{
    setAlert(true)
    setTimeout(()=>{
      setAlert(false)
    },1500)
  }
  return (
    <section className="text-gray-600 body-font loadingProduct">
      <div className='bg-green-500 text-gray-100 absolute top-13 w-full alert'>
  {
    alert ? <Alert msg="Your order is placed"/> : <></>
   }
  </div>
   
  <div className="container px-5  mx-auto">
  
    <CartItem onClick={handleClick}/>
  </div>
</section>

  )
}

export default Cart
