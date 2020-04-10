export function someAction (/* context */) {
}

export function getPostById ({ commit, rootState }, postId) {
  commit('getPostById', { rootState: rootState, postId: postId })
}
export function likePost ({ commit, rootState }, payload) {
  payload.rootState = rootState
  commit('likePost', payload)
}
export function editPost ({ commit, rootState }, payload) {
  commit('editPost', { rootState: rootState, router: payload.router, postId: payload.postId })
}
