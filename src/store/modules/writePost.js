import registerApi from "../../api/registerAPI.js";
import writePostAPI from "../../api/writePostAPI.js";

const state = {
  name: '',
  pwd: '',
  userId: "",
  userName: "",
  token: "",
  post: {},

}


// actions
const actions = {
  async registerAsync({commit}, router) {
    //commit('register',await registerApi.getData())
    commit('register', router)
  },

  writePost({commit}, router) {
    console.log("logout executed");
    //commit('register',await registerApi.getData())
    commit('writePost', router)
  },

  commitPostAsync({commit, rootState}, router) {

    //commit('register',await registerApi.getData())
    commit('commitPost', {router: router, rootState: rootState})
  },
}


// mutations
const mutations = {
  register(state, router) {
    //state.register_success=true
    registerApi.getData(state.name, state.pwd).then(function (response) {
      // handle success
      console.log(response.data);
      state.userId = response.data.uid
      state.userName = response.data.name
    })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        console.log("always executed");

        router.push('/')
      });


  },

  updateName(state, name) {
    state.name = name
  },

  updateContent(state, content) {
    state.post.content = content
  },
  updateTitle(state, title) {
    state.post.title = title
  },


  updatePwd(state, pwd) {
    state.pwd = pwd
  },

  writePost(state, router) {
    router.push('/writePost')
  },

  commitPost(state, payload) {
    console.log("cnt:" + state.post);
    writePostAPI.writePost(state.post,payload.rootState.token).then(function (response) {
      // handle success
      console.log(response.data);

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

}


export default {
  namespaced: true,
  state,
  actions,
  mutations
};
