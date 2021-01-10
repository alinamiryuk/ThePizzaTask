import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { pizzasReducer } from './pizzasReducer'
import { cartReducer } from './cartReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  pizzas: pizzasReducer,
  cart: cartReducer
})
