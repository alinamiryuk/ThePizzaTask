import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers/rootReducer'


const defaultState = {}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return defaultState
    }
    return JSON.parse(serializedState)
  } catch (error) {
    return console.error(error)
  }
}
const persistedState = loadState()

const saveState = (state) => {
  const serializedState = JSON.stringify(state)
  localStorage.setItem('state', serializedState)
}

export const store = createStore(
  rootReducer, persistedState,
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
    pizzas: store.getState().pizzas,
    cart: store.getState().cart,
  })
})
