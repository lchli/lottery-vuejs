export function someAction (/* context */) {
}

export function registerAsync ({ commit }, router) {
  // commit('register',await registerApi.getData())
  commit('register', router)
}

export function writePost ({ commit }, router) {
  console.log('logout executed')
  // commit('register',await registerApi.getData())
  commit('writePost', router)
}

export function commitPostAsync ({ commit, rootState }, router) {
  // commit('register',await registerApi.getData())
  commit('commitPost', {
    router: router,
    rootState: rootState
  })
}

export function getPostById ({ commit, rootState }, postId) {
  commit('getPostById', {
    rootState: rootState,
    postId: postId
  })
}

export function clearPost ({ commit, rootState }) {
  commit('clearPost', { rootState: rootState })
}
