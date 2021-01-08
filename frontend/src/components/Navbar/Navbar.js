import React from 'react'
import { useSelector } from 'react-redux'
import { Logout } from '../Logout/Logout'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const checkAuth = useSelector((state) => state.auth.success)
  if (checkAuth) {
    const userName = JSON.parse(localStorage.getItem('user')).username
    return (
      <div>
        <h4> {userName}</h4>
        <Logout />
      </div>
    )
  } else {
    return (
      <div className="navbar">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </div>
    )
  }
}
