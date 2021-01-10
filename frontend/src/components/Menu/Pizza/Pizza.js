import React, { useState } from 'react'
import './Pizza.css'

export const Pizza = ({ pizza }) => {
  const [counter, setCounter] = useState(0)
  return (
    <div className="pizza">
      <img src={`${pizza.image}`} />
      <h3>{pizza.title}</h3>
      {pizza.text}
      <div className="pizza__counter">
        {pizza.price}
        <button onClick={() => setCounter((state) => state === 0 ? 0 : state - 1)}>-</button>
        {counter}
        <button onClick={() => setCounter((state) => state + 1)}>+</button>
      </div>
    </div>
  )
}
