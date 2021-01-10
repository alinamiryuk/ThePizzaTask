import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/actions/cartActions'
import './CartItem.css'

export const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  const [counter, setCounter] = useState(0)
  return (
    <div className="cartItem">
      <img src={`${item.image}`} />
      <div className="cartItem__infoWrapper">
        <div className="cartItem__info">
          <h1>{item.title}</h1>
          <p>{item.text}</p>
        </div>
      </div>
      <div className="cartItem__counter">
        {item.price} $
        <button
          onClick={() => {
            setCounter((state) => (state === 0 ? 0 : state - 1))
          }}
        >
          -
        </button>
        {counter}
        <button
          onClick={() => {
            setCounter((state) => state + 1)
            dispatch(addToCart(item))
          }}
        >
          +
        </button>
      </div>
    </div>
  )
}
