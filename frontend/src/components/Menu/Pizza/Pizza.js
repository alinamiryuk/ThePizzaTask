import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../redux/actions/cartActions'
import './Pizza.css'

export const Pizza = ({ pizza }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.pizza)
  const check = cart.every((item) => item._id !== pizza._id)
  return (
    <div className="pizza">
      <img src={`${pizza.image}`} />
      <h3>{pizza.title}</h3>
      {pizza.text}
      <div className="pizza__addPrice">
        <p>{pizza.price} $</p>
        {check ? (
          <button
            onClick={() => {
              if (check) {
                dispatch(addToCart(pizza))
              } else {
                alert('This pizza is already in your cart')
              }
            }}
          >
            ADD TO CART
          </button>
        ) : (
          <button disabled>ADDED TO CART</button>
        )}
      </div>
    </div>
  )
}
