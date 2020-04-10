export function someAction (/* store */) {
}

export function registerAsync (store, router) {
  // commit('register',await registerApi.getData())
  // console.log(rootState.token);
  store.commit('register', { router: router, rootState: store.rootState })
}

export function logout ({ commit, rootState }, router) {
  console.log('logout executed')
  // commit('register',await registerApi.getData())
  commit('logout', { router: router, rootState: rootState })
}
export function loginAsync ({ commit, rootState }, router) {
  // commit('register',await registerApi.getData())
  commit('login', { router: router, rootState: rootState })
}
