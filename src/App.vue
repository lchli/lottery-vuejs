<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">3D</router-link>

      <div id="right-layout">
      <div v-if="token.length===0" id="reg">
        <router-link to="/register">注册</router-link>
      </div>

      <div v-if="token.length===0" id="login">
      <router-link to="/login">登录</router-link>
      </div>

      <div v-if="token.length!==0" id="welcome">
        <span>欢迎{{userName}}</span>
      </div>

      <div v-if="token.length!==0" id="writePost" @click="writePost($router)">
        <span>发帖</span>
      </div>


      <div v-if="token.length!==0" id="logout" @click="logout($router)">
        <span>退出登录</span>
      </div>

      </div>

    </div>

    <hr/>


    <router-view/>



  </div>

</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
  }

  #nav {
    width: 100%;
    padding-bottom: 30px;
    padding-top: 30px;

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

    }

  #logout {
    text-align: left;
    margin-left: 15px;
  }

  #login {
    text-align: left;
    margin-left: 15px;
  }

  #reg {
    text-align: left;
    margin-left: 15px;
  }

  #writePost {
    text-align: left;
    margin-left: 15px;
  }


  #right-layout {
    float:right;
    display: flex;
  }

  hr{
    margin: 0;
    margin-bottom: 5px;
    color: gray;
    font-size: 1px;
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
