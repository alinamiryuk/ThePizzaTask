import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { fetchSignupAuth } from '../../redux/thunks'
import './Signup.css'

export const Signup = () => {
  const dispatch = useDispatch()
  const [state, setState] = useForm({ email: '', password: '', userName: '' })

  return (
    <div className="signup">
      <h3>Sign up </h3>
      <label htmlFor="email-signup">What's your email?</label>
      <input
        id="email-signup"
        type="email"
        name="email"
        placeholder="EMAIL"
        value={state.email}
        onChange={setState}
      />
      <label htmlFor="password-signup">Create a password:</label>
      <input
        id="password-signup"
        type="password"
        name="password"
        placeholder="PASSWORD"
        value={state.password}
        onChange={setState}
      />
      <label htmlFor="userName-signup">What should we call you?</label>
      <input
        id="userName-signup"
        placeholder="USERNAME"
        type="text"
        name="userName"
        value={state.userName}
        onChange={setState}
      />
      <button
        variant="contained"
        color="secondary"
        onClick={(e) => {
          e.preventDefault()
          dispatch(fetchSignupAuth(state))
        }}
      >
        SIGNUP
      </button>
      <label>
        Have an account?
        <NavLink to="/login"> Log in</NavLink>
      </label>
    </div>
  )
}
