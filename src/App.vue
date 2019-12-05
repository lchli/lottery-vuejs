<template>
  <div id="app">
    <div id="nav" style="display: flex ">
      <router-link to="/">3D</router-link>
      <div v-if="token.length===0">
        <router-link to="/register">注册</router-link>
        |
      </div>
      <div v-if="token.length===0">
      <router-link to="/login">登录</router-link>
      </div>

      <div v-if="token.length!==0" id="welcome">
        <span>欢迎{{userName}}</span>
      </div>

      <div  id="writePost" @click="writePost($router)">
        <span>|  发帖</span>
      </div>


      <div v-if="token.length!==0" id="logout" @click="logout($router)">
        <span>|  退出登录</span>
      </div>

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }


  #welcome {
      text-align: left;
      color: #DC143C;
      margin-left: 50px;
    }

  #logout {
    text-align: left;
    margin-left: 5px;
  }
</style>


<script>
  // @ is an alias to /src
  import {mapGetters} from 'vuex'
  import {mapActions, mapState} from 'vuex'

  export default {

    methods: {
      ...mapActions('reg', [
        'logout' ,// map `this.increment()` to `this.$store.dispatch('increment')`


      ]),
      ...mapActions('writePost', [
        'writePost'


      ]),


    },

    computed: {
      // mix the getters into computed with object spread operator

      name: {
        get() {
          return this.$store.state.reg.name
        },
        set(value) {
          this.$store.commit('reg/updateName', value)
        }
      },

      pwd: {
        get() {
          return this.$store.state.reg.pwd
        },
        set(value) {
          this.$store.commit('reg/updatePwd', value)
        }
      },
      ...mapState( {
        userId: rootState => rootState.userId,
        userName: rootState => rootState.userName,
        token: rootState => rootState.token,
      })


    },

  };
</script>
