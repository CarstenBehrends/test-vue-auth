<template>
  <div class="login">
    <h1>login page</h1>

    <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
    
      <button>Login</button>
    </form>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
  name: "login",

  data() {
    return {
      email: "",
      password: "",
    };
  },
//https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
  computed: {
      ...mapGetters('auth', [
          'authenticating',
          'authenticationError',
          'authenticationErrorCode'
      ])
  },

  methods: {
      ...mapActions('auth', [
          'login'
      ]),

      handleSubmit() {
          // Perform a simple validation that email and password have been typed in
          if (this.email != '' && this.password != '') {
            this.login({email: this.email, password: this.password})
            this.password = ""
          }
      }
  }
};
</script>