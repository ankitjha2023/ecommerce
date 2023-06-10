import React from 'react'

const Category = ({filter}) => {
  return (
    <div className='flex justify-center align-center gap-3 flex-wrap mb-10 category'>
        
        <button className='border px-5 py-3 text-xl' onClick={()=>filter("all")}>All</button>
        <button className='border px-5 py-3 text-xl' onClick={()=>filter("men's clothing")}>Men's Clothing</button>
        <button className='border px-5 py-3 text-xl' onClick={()=>filter("women's clothing")}>Women's Clothing</button>
        <button className='border px-5 py-3 text-xl' onClick={()=>filter("jewelery")}>jewelery</button>
        <button className='border px-5 py-3 text-xl' onClick={()=>filter("electronics")}>Electronics</button>
       
      
      
    </div>
  )
}

export default Category
