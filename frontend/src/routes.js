import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Cart } from './components/Cart/Cart'
import { Login } from './components/Login/Login'
import { Menu } from './components/Menu/Menu'
import { Signup } from './components/Signup/Signup'

export const useRoutes = (auth) => {
  if (auth) {
return (
    <Switch>
      <Route path="/cart" component={Cart} />
      <Route path="/" component={Menu} />
      <Redirect to="/" />
    </Switch>
  )
  } else {
    return (
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Menu} />
        <Redirect to="/" />
      </Switch>
    )
  }
  
}
