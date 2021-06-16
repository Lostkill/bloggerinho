import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import * as style from './style'

function Header (props) {
  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <style.Header>
      <style.Toolbar>
        <div>
          <style.Title>Bloggerinho</style.Title>
        </div>
        <div>
          <style.NewPostBtn onClick={() => props.history.push('/create/post')}>NEW POST</style.NewPostBtn>
        </div>
      </style.Toolbar>
    </style.Header>
  )
}

Header.propTypes = {
  history: PropTypes.func
}

export default Header
