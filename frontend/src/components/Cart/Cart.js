import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem/CartItem'

export const Cart = () => {
  const cart = useSelector((state) => state.cart)
console.log(cart);
  return (
    <>{cart && cart.map((item) => <CartItem key={item._id} item={item} />)}</>
  )
}
