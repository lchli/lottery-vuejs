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

   logout({commit,rootState}, router) {
    console.log("logout executed");
    //commit('register',await registerApi.getData())
    commit('logout', {router:router,rootState:rootState})
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

        payload.router.push('/login')
    })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        console.log("always executed");


      });


  },
  login(state, payload) {
    //state.register_success=true
    registerApi.login(state.name, state.pwd).then(function (response) {
      // handle success
      console.log(response.data);

      payload.rootState.token = response.data.token
      payload.rootState.userName = response.data.userName

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
  logout(state, payload) {
      payload.rootState.userId = "";
      payload.rootState.userName = "";
      payload.rootState.token = "";

      payload.router.push('/')
  },


}


export default {
  namespaced: true,
  state,
  actions,
  mutations
};
