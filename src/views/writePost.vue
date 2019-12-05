<template>
  <div>
    <input
      placeholder="请选择日期"
      type="text"
      v-model="title"
      />

    <!-- bidirectional data binding（双向数据绑定） -->
    <quill-editor v-model="content"
                  ref="myQuillEditor"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)">
    </quill-editor>

    <el-button type="primary" @click="commitPostAsync($router)">提交</el-button>

  </div>
</template>

<script>

  // you can also register quill modules in the component
  import Quill from 'quill'
  import {mapActions, mapState} from 'vuex'

  export default {
    data() {
      return {
        editorOption: {
          // action: '/api/product/richtext_img_upload.do',  // 必填参数 图片上传地址
          // methods: 'post',  // 必填参数 图片上传方式
          // //token: '',  // 可选参数 如果需要token验证，假设你的token有存放在sessionStorage
          // name: 'upload_file',  // 必填参数 文件的参数名
          // size: 500,  // 可选参数   图片大小，单位为Kb, 1M = 1024Kb
          // accept: 'multipart/form-data, image/png, image/gif, image/jpeg, image/bmp, image/x-icon,image/jpg'  // 可选 可上传的图片格式
        }
      }
    },
    // manually control the data synchronization
    // 如果需要手动控制数据同步，父组件需要显式地处理changed事件


    methods: {
      ...mapActions('writePost', [
        'commitPostAsync' // map `this.increment()` to `this.$store.dispatch('increment')`

      ]),

      onEditorBlur(quill) {
        console.log('editor blur!', quill)
      },
      onEditorFocus(quill) {
        console.log('editor focus!', quill)
      },
      onEditorReady(quill) {
        console.log('editor ready!', quill)
      },
      onEditorChange({quill, html, text}) {
        console.log('editor change!', quill, html, text)
        this.content = html
      },

      onInput (e) {
        this.$store.commit('writePost/updateTitle', e)
      }

    },
    computed: {
      content: {
        get() {
          return this.$store.state.writePost.post.content
        },
        set(value) {
          this.$store.commit('writePost/updateContent', value)
        }
      },

      title: {
        get() {
          return this.$store.state.writePost.post.title
        },
        set(value) {
          this.$store.commit('writePost/updateTitle', value)
        }
      },

      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted() {
      console.log('this is current quill instance object', this.editor)
    }
  }
</script>
