import Vue from 'vue'
import axios from 'axios'

import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(VueQuillEditor/* { default global options } */)

axios.defaults.withCredentials = true
