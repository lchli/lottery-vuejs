import registerApi from '../../api/registerAPI.js'
import writePostAPI from '../../api/writePostAPI.js'

export function someMutation (/* state */) {
}

export function register (state, router) {
  // state.register_success=true
  registerApi.getData(state.name, state.pwd).then(function (response) {
    // handle success
    console.log(response.data)
    state.userId = response.data.uid
    state.userName = response.data.name
  })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .finally(function () {
      // always executed
      console.log('always executed')

      router.push('/')
    })
}

export function updateName (state, name) {
  state.name = name
}

export function updateContent (state, content) {
  state.post.content = content
}

export function updateTitle (state, title) {
  state.post.title = title
}

export function updatePwd (state, pwd) {
  state.pwd = pwd
}

export function writePost (state, router) {
  router.push('/writePost')
}

export function clearPost (state) {
  state.post = {}
}

export function commitPost (state, payload) {
  console.log('cnt:' + state.post)

  if (state.post.postId !== null && state.post.postId !== undefined) {
    console.log('cnt:update')

    writePostAPI.updatePost(state.post, payload.rootState.token).then(function (response) {
      // handle success
      console.log(response.data)
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

    return
  }

  console.log('cnt:add post')
  writePostAPI.writePost(state.post, payload.rootState.token).then(function (response) {
    // handle success
    console.log(response.data)
  })
    .catch(function (error) {
      // handle error
      console.log(error.message)
    })
    .finally(function () {
      // always executed
      console.log('always executed')

      payload.router.push('/')
    })
}

export function getPostById (state, payload) {
  // state.items.push(payload)

  writePostAPI.getPostById(payload.rootState.token, payload.postId).then(function (response) {
    // handle success
    console.log(response.data)
    const data = response.data
    if (data === undefined || data.post === undefined) {
      return
    }

    state.post = data.post
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
