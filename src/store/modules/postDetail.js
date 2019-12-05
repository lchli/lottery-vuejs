import api3d from '../../api/3dAPI'
import writePostAPI from '../../api/writePostAPI'

const state = {
  post: {}
}



// actions
const actions = {
   getPostById({commit,rootState},postId) {
    commit('getPostById',{rootState:rootState,postId:postId})
  },

}

// mutations
const mutations = {
  getPostById(state, payload) {
    // state.items.push(payload)

    writePostAPI.getPostById(payload.rootState.token,payload.postId).then(function (response) {
      // handle success
      console.log(response.data);

      state.post = response.data;

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


}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
