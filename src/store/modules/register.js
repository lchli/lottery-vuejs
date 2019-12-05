import registerApi from "../../api/registerAPI.js";

const state = {
  name: '',
  pwd: '',

}


// actions
const actions = {
  async registerAsync({commit, rootState}, router) {

    //commit('register',await registerApi.getData())
    //console.log(rootState.token);
    commit('register', {router: router, rootState: rootState})
  },

  async logout({commit}, router) {
    console.log("logout executed");
    //commit('register',await registerApi.getData())
    commit('logout', router)
  },
  async loginAsync({commit, rootState}, router) {

    //commit('register',await registerApi.getData())
    commit('login', {router: router, rootState: rootState})
  },

}


// mutations
const mutations = {
  register(state, payload) {
    //state.register_success=true
    console.log(payload.rootState);

    registerApi.getData(state.name, state.pwd).then(function (response) {
      // handle success
      console.log(response.data);
      payload.rootState.userId = response.data.uid
      payload.rootState.userName = response.data.name
    })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        console.log("always executed");

        payload.router.push('/')
      });


  },
  login(state, payload) {
    //state.register_success=true
    registerApi.login(state.name, state.pwd).then(function (response) {
      // handle success
      console.log(response.data);

      payload.rootState.token = response.data.token

    })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        console.log("always executed");

        payload.router.push('/')
      });


  },

  updateName(state, name) {
    state.name = name
  },

  updatePwd(state, pwd) {
    state.pwd = pwd
  },
  logout(state, router, rootState) {
    rootState.userId = "";
    rootState.userName = "";

    router.push('/login')
  },


}


export default {
  namespaced: true,
  state,
  actions,
  mutations
};
