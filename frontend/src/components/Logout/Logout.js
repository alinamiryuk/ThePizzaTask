import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logoutAuth } from '../../redux/actions/authActions'

export const Logout = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <>
      <button
        onClick={() => {
          dispatch(logoutAuth())
          localStorage.removeItem('user')
          history.push('/auth')
        }}
      >
        logout
      </button>
    </>
  )
}
