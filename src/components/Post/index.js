import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import api from '../../@bloggerinho/api'
import * as PostsAction from '../../@bloggerinho/actions/post-actions'

import { ReactComponent as DeleteIcon } from '../../@bloggerinho/assets/svg/trash.svg'

import * as Style from './style'

function Post (props) {
  const dispatch = useDispatch()

  function handleDeletePost () {
    const confirmDelete = confirm(`Você deseja realmente excluir o post ${props.title}?`)

    if (confirmDelete) {
      api().delete(`/posts/${props.id}`)
        .then(res => res.status === 200 ? dispatch(PostsAction.deletePost(props.id)) : alert('Ops algo de errado aconteceu.'))
    }
  }

  return (
    <Style.Container>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Style.UserInfoText fontSize={22} uppercase color='#DFC970'>
          {props.title}
        </Style.UserInfoText>
        {
          props.manager && (
            <Style.Delete onClick={() => handleDeletePost()}>
              <DeleteIcon />
            </Style.Delete>
          )
        }
      </div>
      <hr />
      <Style.UserInfoText fontSize={18}>
        {props.sinopse}
      </Style.UserInfoText>
    </Style.Container>
  )
}

Post.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  manager: PropTypes.bool,
  sinopse: PropTypes.string
}

export default Post
