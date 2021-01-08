import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetAllPizzas } from '../../redux/thunks'
import { Pizza } from './Pizza/Pizza'
import './Menu.css'

export const Menu = () => {
  const dispatch = useDispatch()
  const pizzas = useSelector((state) => state.pizzas)

  useEffect(() => {
    dispatch(fetchGetAllPizzas())
  }, [dispatch])

  return (
    <div className="menu">
      {pizzas &&
        pizzas.map((pizza) => (
          <>
            <Pizza pizza={pizza} key={pizza._id} />
          </>
        ))}
    </div>
  )
}
