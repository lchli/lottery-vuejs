<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

<qriously value="Hello World!" :size="200" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
