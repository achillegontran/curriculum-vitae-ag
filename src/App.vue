<template>
  <div id="app">
    <MonCV/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import MonCV from './components/MonCV/MonCV.vue'


export default {
  name: 'App',
  components: {
    //HelloWorld
    MonCV
  }
}
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
