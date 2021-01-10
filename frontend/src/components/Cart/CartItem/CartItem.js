import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../../../redux/actions/cartActions'
import './CartItem.css'

export const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  const [counter, setCounter] = useState(1)
  let cartPrice = item.price * counter

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
        {cartPrice} $
        <button
          onClick={() => {
            counter === 1
              ? dispatch(deleteFromCart(item._id))
              : setCounter((state) => state - 1)
          }}
        >
          -
        </button>
        {counter}
        <button
          onClick={() => {
            setCounter((state) => state + 1)
          }}
        >
          +
        </button>
      </div>
    </div>
  )
}
