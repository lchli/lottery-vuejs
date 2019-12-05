import Vue from 'vue';
import Vuex from 'vuex';
import ddd from './store/modules/3d';
import reg from './store/modules/register';
import postDetail from './store/modules/postDetail';
import writePost from './store/modules/writePost';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ddd,
    reg,
    writePost,
    postDetail
  },
  state: {
    userId:"",
    userName:"",
    token:"",


  },
  mutations: {

  },
  actions: {

  },
});
