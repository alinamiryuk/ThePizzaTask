import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/actions/cartActions'

export const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  const [counter, setCounter] = useState(0)
  return (
    <div className="cartItem">
      <img src={`${item.image}`} />
      <h3>{item.title}</h3>
      {item.text}
      <div className="pizza__counter">
        {item.price}
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
