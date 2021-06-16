export function login (params) {
  return {
    type: '@user/LOGIN',
    payload: params
  }
}

export function logout (params) {
  return {
    type: '@user/LOGOUT'
  }
}
