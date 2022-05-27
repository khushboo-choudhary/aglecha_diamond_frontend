import React from 'react'
import "./Category.css"
import { useNavigate } from 'react-router-dom'

export default function Category() {

  const navigate = useNavigate();
  
  return (
    <>

      <h1>Categories</h1>
      <div className='Category'>

        {/* Earings Details */}
        <div onClick={() => {
          navigate("/category/earings/products");
         
        }}>
          <p className='CategoryName'>Earings Diamonds</p>
          <p className='CategoryShopNow'>Shop Now</p>
        </div>

        {/* Bracelets Details */}
        <div onClick={() => {
          navigate("/category/bracelets/products");
         
        }}>
          <p className='CategoryName'>Bracelets Diamonds</p>
          <p className='CategoryShopNow'>Shop Now</p>
        </div>

        {/* Chains Details */}
        <div onClick={() => {
          navigate("/category/chains/products");
         
        }}>
          <p className='CategoryName'>Chains Diamonds</p>
          <p className='CategoryShopNow'>Shop Now</p>
        </div>

        {/* Rings Details */}
        <div onClick={() => {
          navigate("/category/rings/products");
          
        }}>
          <p className='CategoryName'>Rings Diamonds</p>
          <p className='CategoryShopNow'>Shop Now</p></div>
      </div>
    </>
  )
}
