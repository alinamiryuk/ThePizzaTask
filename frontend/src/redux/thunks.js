import { loginAuth, logoutAuth, signupAuth } from './actions/authActions'

export const fetchLoginAuth = (body) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const user = await response.json()
  localStorage.setItem('user', JSON.stringify(user))
  dispatch(loginAuth(user))
}

export const fetchSignupAuth = (body) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const user = await response.json()
  localStorage.setItem('user', JSON.stringify(user))
  if (user.success) dispatch(signupAuth(user))
}
