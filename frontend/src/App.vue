<template>
  <div id="app">
    <h1>我是App.vue容器</h1>
    <h2 class="page-title"><a href="App.vue">开发组件库</a></h2>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.page-title{
  color: #00A0D8;
  font-size: 30px;
  font-weight: bold;
  padding: 30px 0;
}
.page-title a{
  color: #00A0D8;
}
</style>
