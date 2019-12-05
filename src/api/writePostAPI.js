import  axios from 'axios'
import qs from 'qs'

export default {

  writePost(post,token) {
    let data = new FormData();
    data.append('content',post.content);
    data.append('title',post.title);
    document.cookie="uid="+token+"; path=/";

   return axios.post('/api/post/writePost',data)
  },

  getPost(token) {

    document.cookie="uid="+token+"; path=/";

    return axios.get('/api/post/getPost')
  },

  getPostById(token,postId) {

    document.cookie="uid="+token+"; path=/";

    return axios.get('/api/post/getPostById?postId='+postId)
  },


}
