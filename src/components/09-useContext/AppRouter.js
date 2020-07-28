import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AboutScreen from './AboutScreen'
import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/login" component={LoginScreen} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
