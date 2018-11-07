

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button v-on:click="search">查询</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  
  name: "App",
  methods: {
    search: function () {
      axios.get('/api')
      .then((res)=>{
        console.log(res)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
