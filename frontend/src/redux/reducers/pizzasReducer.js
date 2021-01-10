import { GET_ALL_PIZZAS } from '../actionTypes'

const initialState = []

export const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PIZZAS:
      return action.payload

    default:
      return state
  }
}
