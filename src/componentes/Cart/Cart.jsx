import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Cart.css'

const Cart = () => {
  return (
    <>
    <NavBar />
    <div className='container-carrito'>
      <span className='texto-carrito'>Carrito</span>
    </div>
    </>
  )
}

export default Cart