<template>
    <div>
        <input
                placeholder="请输入标题"
                type="text"
                v-model="title"
                id="title"
        />

        <!-- bidirectional data binding（双向数据绑定） -->
        <quill-editor v-model="content"
                      ref="myQuillEditor"
                      id="content"
                      :options="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)">
        </quill-editor>

        <div id="commitP" >

        <el-button id="commit" type="primary" @click="commitPostAsync($router)">提交</el-button>
        </div>

    </div>
</template>


<style lang="scss">


    #title {
        width: 30%;
        height: fit-content;
        padding: 5px;
    }

    #commitP {
        margin-top: 20px;
        justify-content: center;
        display: flex;
    }

    #content {
        font-size: 12px;
        margin-top: 20px;
    }
</style>

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
                'commitPostAsync', // map `this.increment()` to `this.$store.dispatch('increment')`
                'getPostById', // map `this.increment()` to `this.$store.dispatch('increment')`
                'clearPost'

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

            onInput(e) {
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
            console.log('this.$route.query.postId:'+this.$route.query.postId)
            const postId = this.$route.query.postId;

            if (postId != undefined && postId.length > 0) {
                this.getPostById(postId)
            }else{
                this.clearPost()
            }
        }
    }
</script>
