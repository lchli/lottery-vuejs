import axios from 'axios'

export default {

  writePost (post, token) {
    const data = new FormData()
    data.append('content', post.content)
    data.append('title', post.title)

    document.cookie = 'uid=' + token + '; path=/'
    const bear = 'Bearer ' + token

    console.log('bear:' + bear)

    const headers = {
      authorization: bear
    }

    return axios.post('/api/post/writePost', data, { headers: headers })
  },
  updatePost (post, token) {
    const data = new FormData()
    data.append('content', post.content)
    data.append('title', post.title)
    data.append('postId', post.postId)
    document.cookie = 'uid=' + token + '; path=/'
    const bear = 'Bearer ' + token

    return axios.post('/api/post/updatePost', data, {
      headers: {
        Authorization: bear
      }
    })
  },

  getPost (token) {
    document.cookie = 'uid=' + token + '; path=/'

    return axios.get('/api/post/getPosts')
  },

  getPostById (token, postId) {
    document.cookie = 'uid=' + token + '; path=/'

    return axios.get('/api/post/getPostById?postId=' + postId)
  },

  likePost (token, postId) {
    document.cookie = 'uid=' + token + '; path=/'

    const data = new FormData()
    data.append('postId', postId)
    const bear = 'Bearer ' + token

    return axios.post('/api/post/likePost', data, {
      headers: {
        Authorization: bear
      }
    })
  },

  search (token, key) {
    document.cookie = 'uid=' + token + '; path=/'

    return axios.get('/api/search/post/list', {
      params: {
        keyword: key,
        sort: 'title',
        page: 0,
        size: 30
      }
    })
  }

}
