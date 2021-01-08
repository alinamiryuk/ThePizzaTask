import { GET_ALL_PIZZAS } from "../actionTypes"

export const getAllPizzas = (data) => {
  return {
    type: GET_ALL_PIZZAS,
    payload: data
  }
}
