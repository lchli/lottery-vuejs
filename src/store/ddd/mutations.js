import writePostAPI from '../../api/writePostAPI'

export function someMutation (/* state */) {
}

export function getPost (state, payload) {
  // state.items.push(payload)

  writePostAPI.getPost(payload.rootState.token).then(function (response) {
    // handle success
    console.log(response.data)

    const data = response.data
    if (data === undefined) {
      return
    }
    const posts = data.posts
    if (posts === undefined) {
      return
    }

    state.items = posts
  })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .finally(function () {
      // always executed
      console.log('always executed')

      payload.router.push('/')
    })
}

export function postDetail (state, payload) {
  payload.router.push({ path: '/postDetail', query: { postId: payload.postId } })
}

export function updateSearchKey (state, key) {
  state.searchkey = key
}
export function search (state, payload) {
  // state.items.push(payload)

  writePostAPI.search(payload.rootState.token, state.searchkey).then(function (response) {
    // handle success
    console.log(response.data)

    const data = response.data
    if (data === undefined) {
      return
    }
    const posts = data.posts
    if (posts === undefined) {
      return
    }

    state.items = posts
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
