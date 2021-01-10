import { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART } from '../actionTypes'

export const addToCart = (title, text, price, image, _id) => {
  return {
    type: ADD_TO_CART,
    payload: { title, text, price, image, _id },
  }
}

export const deleteFromCart = (_id) => {
  return { 
    type: DELETE_FROM_CART, 
    payload: _id 
  }
}

// export const clearCart = () => {
//   return {
//     type: CLEAR_CART,
//     payload: 
//   }
// }
