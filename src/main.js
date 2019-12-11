import Vue from 'vue';
import axios from 'axios'
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui'
import VueQriously from 'vue-qriously'
import VueQuillEditor from 'vue-quill-editor'
import 'element-ui/lib/theme-chalk/index.css'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQriously);

Vue.config.productionTip = false;

Vue.use(ElementUI);


Vue.use(VueQuillEditor, /* { default global options } */)

//axios.defaults.baseURL="http://localhost:50209";
axios.defaults.withCredentials=true

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
