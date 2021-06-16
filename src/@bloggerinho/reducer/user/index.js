const INITIAL_STATE = {
  auth: false,
  user: {}
}

export default function user (state = INITIAL_STATE, action) {
  switch (action.type) {
  case '@user/LOGIN':
    return {
      ...state,
      auth: true,
      ...action.payload
    }
  case '@user/LOGOUT':
    return {
      ...INITIAL_STATE
    }
  default:
    return state
  }
}
