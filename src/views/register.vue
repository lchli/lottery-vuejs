<template>
  <div>

<div style="text-align: center">
<input type="text" v-model="name" placeholder="input user name"><br>
<input type="text" v-model="pwd" placeholder="input pwd" style="margin-top: 10px"><br>

  <button @click="registerAsync($router)" style="margin-top: 10px">注册</button>

  </div>


  </div>
</template>



<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import { mapActions,mapState } from 'vuex'

export default {

  methods: {
    ...mapActions('reg',[
      'registerAsync' // map `this.increment()` to `this.$store.dispatch('increment')`

    ]),

  },

   computed: {
       // mix the getters into computed with object spread operator

     name: {
       get () {
         return this.$store.state.reg.name
       },
       set (value) {
         this.$store.commit('reg/updateName', value)
       }
     },

     pwd: {
       get () {
         return this.$store.state.reg.pwd
       },
       set (value) {
         this.$store.commit('reg/updatePwd', value)
       }
     },
     ...mapState('reg',{

     })



     },

};
</script>
