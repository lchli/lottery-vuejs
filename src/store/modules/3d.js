import api3d from '../../api/3dAPI'
import writePostAPI from '../../api/writePostAPI'

const state = {
    items: []
}

// getters
const getters = {
    posts: (state, getters, rootState) => {
        return state.items
    }
}

// actions
const actions = {
    async getPost({commit, rootState}, router) {
        commit('getPost', {rootState: rootState, router: router})
    },
    postDetail({commit, rootState}, payload) {
        commit('postDetail', {rootState: rootState, router: payload.router, postId: payload.postId})
    },


}

// mutations
const mutations = {
    getPost(state, payload) {
        // state.items.push(payload)

        writePostAPI.getPost(payload.rootState.token).then(function (response) {
            // handle success
            console.log(response.data);

            const data = response.data;
            if (data == undefined) {
                return;
            }
            const posts=data.posts;
            if (posts == undefined) {
                return;
            }

            state.items = posts;


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

    postDetail(state, payload) {
        payload.router.push({path: '/postDetail', query: {postId: payload.postId}})
    },



}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
