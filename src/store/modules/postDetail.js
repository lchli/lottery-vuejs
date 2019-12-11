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
    likePost({commit, rootState}, payload) {
        payload.rootState=rootState;
        commit('likePost', payload)
    },
    editPost({commit, rootState}, payload) {
        commit('editPost', {rootState: rootState, router: payload.router, postId: payload.postId})
    },


}

// mutations
const mutations = {
  getPostById(state, payload) {
    // state.items.push(payload)

    writePostAPI.getPostById(payload.rootState.token,payload.postId).then(function (response) {
      // handle success
      console.log(response.data);

      state.post = response.data.post;

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
    editPost(state, payload) {
        payload.router.push({path: '/writePost', query: {postId: payload.postId}})
    },
    likePost(state, payload) {

        writePostAPI.likePost(payload.rootState.token, payload.postId).then(function (response) {
            // handle success
            // state.items = response.data;
            console.log(response.data);

            state.post.postLikeCount=response.data.postLikeCount;



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
