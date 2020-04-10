export function someAction (/* context */) {
}

export function getPost ({ commit, rootState }, router) {
  commit('getPost', { rootState: rootState, router: router })
}
export function postDetail ({ commit, rootState }, payload) {
  commit('postDetail', { rootState: rootState, router: payload.router, postId: payload.postId })
}
export function search ({ commit, rootState }, payload) {
  commit('search', { rootState: rootState })
}
