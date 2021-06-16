import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import Header from '../../components/Header/index.js'

import UserNav from '../../components/UserNav'
import Post from '../../components/Post'

import api from '../../@bloggerinho/api'
import * as PostsAction from '../../@bloggerinho/actions/post-actions'

import NothingHere from '../../@bloggerinho/assets/nothing_here.png'
import * as Style from './style'

function Home (props) {
  const dispatch = useDispatch()

  useEffect(() => {
    api().get('/posts')
      .then(res => dispatch(PostsAction.list(res.data)))
  }, [])

  return (
    <div>
      <Header
        history={props.history}
      />
      <Style.Main>
        <Style.UserInfoContainer>
          <UserNav
            name={props.user.name}
            email={props.user.email}
            totalPosts={props.posts.length}
          />
        </Style.UserInfoContainer>
        <Style.FeedContainer>
          {props.posts.length > 0
            ? props.posts.map(post => (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                sinopse={post.sinopse}
                content={post.content}
                manager={post.user_id === props.user.id}
              />
            ))
            : (
              <Style.NothingHere>
                <img src={NothingHere} alt="empty posts list"/>
                <span>Nenhum post a ser exibido ainda...</span>
              </Style.NothingHere>
            )}
        </Style.FeedContainer>
      </Style.Main>
    </div>
  )
}

Home.propTypes = {
  user: PropTypes.object,
  posts: PropTypes.array,
  history: PropTypes.func
}

const mapStateToProps = ({ User, Posts }) => {
  const { user } = User
  const { posts } = Posts

  return {
    user,
    posts
  }
}

export default connect(mapStateToProps, {})(Home)
