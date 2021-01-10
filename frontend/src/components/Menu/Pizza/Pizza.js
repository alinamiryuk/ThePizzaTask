import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/actions/cartActions'
import './Pizza.css'

export const Pizza = ({ pizza }) => {
  const dispatch = useDispatch()

  return (
    <div className="pizza">
      <img src={`${pizza.image}`} />
      <h3>{pizza.title}</h3>
      {pizza.text}
      <div className="pizza__counter">
        <p>{pizza.price} $</p>
        <button
          onClick={() => {
            dispatch(addToCart(pizza))
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  )
}
