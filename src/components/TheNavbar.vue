<template>
  <header class="navbar">
    <h3 class="logo">Router site with Vue</h3>
    <ul class="navbar-menu">
      <li><router-link to="/">Home </router-link></li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li><router-link to="/login">Log in</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "TheNavbar",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>

.card{
  position: absolute;
  top: 30%;
  left: 10%;
  text-align: center;
  width: 80%;
}

</style>