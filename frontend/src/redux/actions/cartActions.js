import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
  GET_SUM,
} from '../actionTypes'

export const addToCart = (pizza) => {
  return {
    type: ADD_TO_CART,
    payload: pizza,
  }
}

export const getSum = (order) => {
  const sum = order.reduce((prev, item) => {
    return prev + item.price
  }, 0)
  const delivery = sum > 30 ? 0 : 2
  const total = delivery + sum
  return {
    type: GET_SUM,
    payload: { sum, delivery, total },
  }
}

export const deleteFromCart = (_id) => {
  return {
    type: DELETE_FROM_CART,
    payload: _id,
  }
}

// export const clearCart = () => {
//   return {
//     type: CLEAR_CART,
//     payload:
//   }
// }
