import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import * as LoginActions from '../../@bloggerinho/actions/user-actions'

import { ReactComponent as UserIcon } from '../../@bloggerinho/assets/svg/user-solid.svg'

import * as style from './style'

function UserNav (props) {
  const dispatch = useDispatch()

  return (
    <style.Container>
      <style.UserInfoContainer>
        <style.UserIconContainer>
          <UserIcon style={{ width: '55px', height: '55px' }} />
        </style.UserIconContainer>

        <style.UserInfoText
          uppercase
          fontSize={16}
          fontWeight={'bold'}
          color='#3E342A'
        >
          {props.name}
        </style.UserInfoText>
        <style.UserInfoText fontSize={12} color='#3E342A'>
          {props.email}
        </style.UserInfoText>

        <style.UserTotalPostsContainer>
          <style.UserInfoText fontSize={12} color='#ffffff'>
            Você publicou: <b>{props.totalPosts}</b> Posts
          </style.UserInfoText>
        </style.UserTotalPostsContainer>

        <style.LogoutBtn onClick={() => dispatch(LoginActions.logout())} fontSize={12} color='#ffffff'>
          <style.UserInfoText fontSize={12} color='#ffffff'>
            SAIR
          </style.UserInfoText>
        </style.LogoutBtn>
      </style.UserInfoContainer>
    </style.Container>
  )
}

UserNav.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  totalPosts: PropTypes.number
}

export default UserNav
