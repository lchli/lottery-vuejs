<template>
  <div>
    <ul id="example-1">
      <li v-for="item in posts" @click="postDetail({router:$router,postId:item.postId})">
        {{ item.title }}
      </li>
    </ul>


  </div>
</template>


<script>
  // @ is an alias to /src
  import {mapGetters} from 'vuex'
  import {mapActions, mapState} from 'vuex'

  export default {

    mounted: function () {

      this.getPost(this.$route)
    },

    methods: {
      ...mapActions('ddd', [
        'getPost', // map `this.increment()` to `this.$store.dispatch('increment')`
        'postDetail'
      ]),


    },

    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters('ddd', {
        posts: 'posts',

      }),
      ...mapState('ddd', {

      })
    }


  };
</script>
