import React from 'react'
import { useSelector } from 'react-redux'
import { Logout } from '../Logout/Logout'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  const checkAuth = useSelector((state) => state.auth.success)
  if (checkAuth) {
    const userName = JSON.parse(localStorage.getItem('user')).username
    return (
      <div className="navbar">
        <h4> {userName}</h4>
        <Logout />
        <NavLink to="/cart">Cart</NavLink>
      </div>
    )
  } else {
    return (
      <div className="navbar">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/cart">Cart <span>0</span></NavLink>
      </div>
    )
  }
}
