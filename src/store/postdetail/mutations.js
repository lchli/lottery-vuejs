import writePostAPI from '../../api/writePostAPI'

export function someMutation (/* state */) {
}

export function getPostById (state, payload) {
  // state.items.push(payload)

  writePostAPI.getPostById(payload.rootState.token, payload.postId).then(function (response) {
    // handle success
    console.log(response.data)

    state.post = response.data.post
  })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .finally(function () {
      // always executed
      console.log('always executed')
    })
}

export function editPost (state, payload) {
  payload.router.push({ path: '/writePost', query: { postId: payload.postId } })
}

export function likePost (state, payload) {
  writePostAPI.likePost(payload.rootState.token, payload.postId).then(function (response) {
    // handle success
    // state.items = response.data;
    console.log(response.data)

    state.post.postLikeCount = response.data.postLikeCount
  })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .finally(function () {
      // always executed
      console.log('always executed')
    })
}
