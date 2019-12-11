import axios from 'axios'
import qs from 'qs'

export default {

    writePost(post, token) {
        let data = new FormData();
        data.append('content', post.content);
        data.append('title', post.title);

        document.cookie = "uid=" + token + "; path=/";

        return axios.post('/api/post/writePost', data)
    },
    updatePost(post, token) {
        let data = new FormData();
        data.append('content', post.content);
        data.append('title', post.title);
        data.append('postId', post.postId);
        document.cookie = "uid=" + token + "; path=/";

        return axios.post('/api/post/updatePost', data)
    },

    getPost(token) {

        document.cookie = "uid=" + token + "; path=/";

        return axios.get('/api/post/getPosts')
    },

    getPostById(token, postId) {

        document.cookie = "uid=" + token + "; path=/";

        return axios.get('/api/post/getPostById?postId=' + postId)
    },

    likePost(token, postId) {

        document.cookie = "uid=" + token + "; path=/";

        let data = new FormData();
        data.append('postId', postId);

        return axios.post('/api/post/likePost',data);
    },


}
