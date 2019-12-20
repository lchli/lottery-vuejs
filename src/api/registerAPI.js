import  axios from 'axios'
import qs from 'qs'

export default {

  getData(name,pwd) {
    let data = new FormData();
    data.append('pwd',pwd);
    data.append('username',name);
    data.append('headUrl','headUrl');

   return axios.post('/api/ucenter/register',data)
  },

  login(name,pwd) {
    let data = {};
    data.password=pwd;
    data.username=name;

    return axios.post('/api/auth/userlogin',data)
  },


}
