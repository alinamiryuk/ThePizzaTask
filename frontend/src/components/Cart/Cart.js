import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartItem } from './CartItem/CartItem'
import './Cart.css'
import { getSum } from '../../redux/actions/cartActions'

export const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getSum(cart.pizza))
  }, [dispatch, cart.pizza])

  return (
    <div className="cart">
      {cart.pizza &&
        cart.pizza.map((item) => <CartItem key={item._id} item={item} />)}
      <div className="cart__priceInfo">
        <p>
          <span>order: </span>
          {cart.sum} $
        </p>
        <p>
          <span>delivery: </span>
          {cart.delivery} $
        </p>
        <p>
          <span>total: </span>
          {cart.total} $
        </p>
        <button>buy</button>
      </div>
    </div>
  )
}
