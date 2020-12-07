<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <V2-cupertino @did-present="log">
      <HelloWorld />
    </V2-cupertino>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import V2Cupertino from './components/V2Cupertino.vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',
  components: {
    V2Cupertino,
    HelloWorld
  },
  methods: {
    log: function() {
      console.log('Removed funny word :D');
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
