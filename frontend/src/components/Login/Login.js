import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { fetchLoginAuth } from '../../redux/thunks'

export const Login = () => {
  const dispatch = useDispatch()
  const [state, setState] = useForm({ userName: '', password: '' })

  return (
    <div>
      <h3>Log in if you have already registered </h3>
      <label htmlFor="userName-login">Username:</label>
      <input
        placeholder="USERNAME"
        id="userName-login"
        type="text"
        name="userName"
        value={state.userName}
        onChange={setState}
      />
      <label htmlFor="password-login">Password:</label>
      <input
        id="password-login"
        type="password"
        name="password"
        placeholder="PASSWORD"
        value={state.password}
        onChange={setState}
      />

      <button
        onClick={(e) => {
          e.preventDefault()
          dispatch(fetchLoginAuth(state))
        }}
      >
        Log in
      </button>
      <label>
        Don't have an account?
        <NavLink to="/signup"> Signup</NavLink>
      </label>
    </div>
  )
}
