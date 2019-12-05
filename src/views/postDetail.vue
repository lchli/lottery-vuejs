<template>
  <div v-html="post.content">


  </div>
</template>


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
        'getPostById'
      ]),



    },

    computed: {
      // mix the getters into computed with object spread operator
      ...mapState('postDetail', {
        post: state => state.post
      })
    }


  };
</script>
