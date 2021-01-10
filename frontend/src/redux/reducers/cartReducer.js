import { ADD_TO_CART, DELETE_FROM_CART, GET_SUM } from '../actionTypes'

const initialState = { pizza: [], sum: 0, delivery: 0, total: 0 }

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // const customer = JSON.parse(localStorage.getItem('user'))
      return { ...state, pizza: [...state.pizza, action.payload] }
    case GET_SUM:
      return { ...state, sum: action.payload.sum, delivery: action.payload.delivery, total: action.payload.total }

    case DELETE_FROM_CART:
      return {
        ...state,
        pizza: state.pizza.filter(
          (pizzaCheck) => pizzaCheck._id !== action.payload
        ),
      }
    default:
      return state
  }
}
