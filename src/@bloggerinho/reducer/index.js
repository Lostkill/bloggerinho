import { combineReducers } from 'redux'

import UserReducer from './user'
import PostsReducer from './posts'

export default combineReducers({
  User: UserReducer,
  Posts: PostsReducer
})
