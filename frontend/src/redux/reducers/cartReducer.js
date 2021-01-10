import { ADD_TO_CART } from "../actionTypes"

const initialState = []

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // const customer = JSON.parse(localStorage.getItem('user'))
      return [...state, action.payload]
    default:
      return state
  }
}
