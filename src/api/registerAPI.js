import axios from 'axios'

export default {

  getData (name, pwd) {
    const data = new FormData()
    data.append('pwd', pwd)
    data.append('username', name)
    data.append('headUrl', 'headUrl')

    return axios.post('/api/ucenter/register', data)
  },

  login (name, pwd) {
    const data = {}
    data.password = pwd
    data.username = name

    return axios.post('/api/auth/userlogin', data)
  }

}
