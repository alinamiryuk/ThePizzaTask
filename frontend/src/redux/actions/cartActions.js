import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  GET_SUM,
  EDIT_QUANTITY,
} from '../actionTypes'

export const addToCart = (pizza) => {
  return {
    type: ADD_TO_CART,
    payload: pizza,
  }
}

export const getSum = (order) => {
  const sum = order.reduce((prev, item) => {
    return prev + item.price * item.quantity
  }, 0)
  const delivery = sum > 30 ? 0 : 2
  const total = delivery + sum
  return {
    type: GET_SUM,
    payload: { sum, delivery, total },
  }
}

export const editQuantity = (_id, quantity) => {
  return {
    type: EDIT_QUANTITY,
    payload: { _id, quantity },
  }
}

export const deleteFromCart = (_id) => {
  return {
    type: DELETE_FROM_CART,
    payload: _id,
  }
}
