import registerApi from '../../api/registerAPI.js'

export function register (state, payload) {
  // state.register_success=true
  console.log(payload.rootState)

  registerApi.getData(state.name, state.pwd).then(function (response) {
    // handle success
    console.log(response.data)
    payload.rootState.userId = response.data.uid
    payload.rootState.userName = response.data.name

    payload.router.push('/login')
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

export function login (state, payload) {
  // state.register_success=true
  registerApi.login(state.name, state.pwd).then(function (response) {
    // handle success
    console.log(response.data)

    payload.rootState.token = response.data.token
    payload.rootState.userName = response.data.userName
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

export function updateName (state, name) {
  state.name = name
}

export function updatePwd (state, pwd) {
  state.pwd = pwd
}

export function logout (state, payload) {
  payload.rootState.userId = ''
  payload.rootState.userName = ''
  payload.rootState.token = ''

  payload.router.push('/')
}
