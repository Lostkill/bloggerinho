export function list (list) {
  return {
    type: '@posts/LIST',
    payload: list
  }
}

export function create (params) {
  return {
    type: '@posts/NEW',
    payload: params
  }
}

export function deletePost (id) {
  return {
    type: '@posts/DELETE',
    payload: id
  }
}
