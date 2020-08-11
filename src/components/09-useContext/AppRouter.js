import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './NavBar'
import AboutScreen from './AboutScreen'
import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
