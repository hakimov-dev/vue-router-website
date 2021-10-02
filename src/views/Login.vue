<template>
  <form class="card" @submit.prevent="submit">
    <h2>Mini Gmail Clone</h2>
    <div class="form-control">
      <label for="email">Email</label>
      <input type="text" id="email" v-model.trim="email" />
    </div>

    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" />
    </div>
     
     <router-link to="/dashboard">
    <button class="btn primary" type="submit">Log in</button>
    </router-link>
    <router-link to="/forget">
    <button class="btn warning">Forgot password?</button>
    </router-link>
  </form>

</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    isValid() {
      return this.email !== "" && this.password !== "";
    },
  },
  methods: {
    submit() {
      if (this.isValid) {
        // login
      }
    },
  },
};
</script>

<style scoped></style>
