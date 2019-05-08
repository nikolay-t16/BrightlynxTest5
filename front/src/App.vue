<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <a href="/">Главная</a> |
    <a href="/reg">Регистрация</a> |
    <a href="/auth">Авторизация</a> |
    <a href="/list">Список</a>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
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
</style>
