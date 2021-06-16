const INITIAL_STATE = {
  posts: []
}

export default function user (state = INITIAL_STATE, action) {
  switch (action.type) {
  case '@posts/NEW':
    return {
      ...state,
      posts: [
        ...state.posts,
        action.payload
      ]
    }
  case '@posts/DELETE':
    return {
      ...state,
      posts: state.posts.filter(post => post.id !== action.payload)
    }
  case '@posts/LIST':
    return {
      ...state,
      posts: action.payload
    }
  default:
    return state
  }
}
