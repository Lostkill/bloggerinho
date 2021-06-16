import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Routes from './routes'
import Login from '../../pages/login'

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route {...rest} render={(props) =>
      auth
        ? (
          <Component {...props} />
        )
        : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )}
    />
  )
}

const LoginRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route {...rest} render={(props) =>
      auth
        ? (
          <Redirect to={{ pathname: '/app', state: { from: props.location } }} />
        )
        : (
          <Component {...props} />
        )}
    />
  )
}

function AppRoute (props) {
  if (props.location.pathname === '/') {
    if (props.auth) {
      return <Redirect to='/app'/>
    } else {
      return <Redirect to='/login'/>
    }
  }

  return (
    <div className="app-main">
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/app" auth={props.auth} component={Routes}/>
          <LoginRoute path="/" auth={props.auth} component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

AppRoute.propTypes = {
  auth: PropTypes.bool,
  location: PropTypes.object
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
  auth: PropTypes.bool.isRequired,
  location: PropTypes.object
}

LoginRoute.propTypes = {
  component: PropTypes.func,
  auth: PropTypes.bool.isRequired,
  location: PropTypes.object
}

const mapStateToProps = ({ User }) => {
  const { auth } = User

  return {
    auth
  }
}

export default connect(mapStateToProps, {})(AppRoute)
