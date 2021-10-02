<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import Login from './views/Login'

export default {
  components: {TheNavbar, Login},
  provide() {
    return {
      emails: [
        {id: 1, theme: 'I bought myself a PlayStation 5'},
        {id: 2, theme: 'Learned Vue Router'},
        {id: 3, theme: 'I want to learn all of Vue'},
        {id: 4, theme: 'And the next block is about Vuex!'},
        {id: 5, theme: 'What about Vue Hooks?'}
      ]
    }
  }
}
</script>

<style>

.card{
  position: absolute;
  top: 26%;
  left: 10%;
  width: 80%;
}

button a{
  color: #fff;
}
</style>
