import {
  LOGIN_AUTH,
  SIGNUP_AUTH,
  LOGOUT_AUTH,
} from '../actionTypes'

export const loginAuth = (user) => {
  return {
    type: LOGIN_AUTH,
    payload: { success: user.success, user },
  }
}

export const signupAuth = (user) => {
  return {
    type: SIGNUP_AUTH,
    payload: { success: user.success, user },
  }
}

export const logoutAuth = () => {
  return {
    type: LOGOUT_AUTH,
    payload: { success: false, registered: false },
  }
}
