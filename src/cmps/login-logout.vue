<template>
  <section class="login-signup-page">
    <h3>Welcome to Bit project</h3>
    <div class="login-conatiner" v-if="isSignUp">
      <form class="login-form" @submit.prevent="onLogin">
        <input
          type="text"
          name="username"
          v-model="credentials.username"
          placeholder="Username"
          required
          autoFocus
        />
        <input
          type="password"
          name="password"
          v-model="credentials.password"
          placeholder="Password"
          required
        />
        <button hidden="true"></button>
      </form>
      <button class="btn-signup-login" v-on:click="onLogin">login</button>
    </div>

    <div class="signup-container" v-if="!isSignUp" @submit.prevent="onSignup">
      <form class="signup-form">
        <input
          type="text"
          name="fullname"
          v-model="credentials.fullname"
          placeholder="Fullname"
          required
        />
        <input
          type="text"
          name="username"
          v-model="credentials.username"
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          v-model="credentials.password"
          placeholder="Password"
          required
        />
      </form>
      <button class="btn-signup-login" v-on:click="onSignup">Signup</button>
    </div>
    <hr />
    <button class="btn-signup-login" v-on:click="toggleSignUp">
      {{ getBtnTxt }}
    </button>
  </section>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from "../services/eventBus.service";
import { userService } from "../services/user.service";

export default {
  data() {
    return {
      credentials: userService.getEmptyCredentials(),
      isSignUp: true,
    };
  },
  created() {},
  methods: {
    toggleSignUp() {
      this.isSignUp ? (this.isSignUp = false) : (this.isSignUp = true);
    },
    async onLogin() {
      try {
        const user = await userService.login(this.credentials);
        // showSuccessMsg(`hello ${user.fullname}`);
        this.credentials = userService.getEmptyCredentials();
        this.$emit("logged");
      } catch (err) {
        // showErrorMsg("Something went wrong");
      }
    },
    async onSignup() {
      try {
        console.log('ssss')
        const user = await userService.signup(this.credentials);
        // showSuccessMsg(`hello ${user.fullname}`);
        this.credentials = userService.getEmptyCredentials();
        this.$emit("logged");
      } catch (err) {
        // showErrorMsg("Something went wrong");
      }
    },
  },
  computed: {
    getBtnTxt() {
      return this.isSignUp ? "Signup" : "Login";
    },
  },
};
</script>