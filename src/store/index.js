import Vue from 'vue'
import Vuex from 'vuex'

import reg from './register'
import writePost from './writepost'
import ddd from './ddd'
import postDetail from './postdetail'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      reg,
      writePost,
      ddd,
      postDetail
    },
    state: {
      userId: '',
      userName: '',
      token: ''
    },
    mutations: {

    },
    actions: {

    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: false
  })

  return Store
}
