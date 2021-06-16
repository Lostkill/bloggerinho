import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'

import HOME from '../../pages/home'
import CREATE_POST from '../../pages/post/create'

function Routes (props) {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Route path='/app' component={(props) => <HOME history={props.history} />} />
        <Route path='/create/post' component={(props) => <CREATE_POST history={props.history} />} />
      </BrowserRouter>
    </div>
  )
}

Routes.propTypes = {
  history: PropTypes.func
}

export default withRouter(Routes)
