<template>
  <div>
    <div>标题：{{post.title}} </div>
    <div>作者：{{post.userName}} </div>
    <div>点赞：{{post.postLikeCount}} </div>
    <div v-if="token.length!==0">
    <i class="el-icon-plus" id="like" @click="likePost({router:$router,postId:post.postId})"></i>
    <i class="el-icon-edit" id="edit" @click="editPost({router:$router,postId:post.postId})"></i>
    </div>

    <div v-html="post.content" id="content"></div>
  </div>
</template>


<style lang="scss">


  #like {
    text-align: left;
    margin-left: 0px;
  }

  #edit {
    text-align: left;
    margin-left: 15px;
  }

  #content {
   font-size: 12px;
  }
</style>

<script>
  // @ is an alias to /src
  import {mapGetters} from 'vuex'
  import {mapActions, mapState} from 'vuex'

  export default {

    mounted: function () {
      // `this` 指向 vm 实例
      console.log('a is: ' + this.$route.query.postId)
      this.getPostById(this.$route.query.postId)
    },

    methods: {
      ...mapActions('postDetail', [
        'getPostById',
        'likePost',
        'editPost',
      ]),



    },

    computed: {
      // mix the getters into computed with object spread operator
      ...mapState('postDetail', {
        post: state => state.post
      }),
        ...mapState( {
            token: rootState => rootState.token,
        })
    }


  };
</script>
