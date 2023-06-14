<template>
  <div class="app">
    <img src="@img/avatar.jpg">
    <p>{{ msg }}</p>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Hello world'
    }
  }
}
</script>

<style lang="stylus" scoped>
.app
  color: skyblue
  img
    width: 100px
    height: 100px
    transform: translate(10px)
</style>
