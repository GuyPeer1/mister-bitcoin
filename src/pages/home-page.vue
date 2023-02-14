<template>
<section class="home-page">
  <h2>Hello, {{user.name}}</h2>
  <h2>Bitcoin to $: {{exchangeRate}}</h2>
   <img :src="user.imgUrl" alt="contact" />
   <section class="user-modal-area" v-if="needToBeDisplay">
      <UserModalInfo  @logged="toggleNeedToBeDisplay"/>
    </section>
    <button
      class="btn-signup-login"
      style="width: 250px"
      v-on:click="toggleNeedToBeDisplay"
    >
    BUTTON
    </button>
</section>
</template>

<script>
import { bitService } from "../services/bitService.js";
import { userService } from "../services/user.service";
import  UserModalInfo  from '../cmps/login-logout.vue';

export default {
  data() {
    return {
      user: userService.getUser(),
      exchangeRate: "",
      needToBeDisplay: true,
    };
  },
  async created() {
    this.exchangeRate = await bitService.getRate();
  },
  methods: {
    toggleNeedToBeDisplay() {
      this.needToBeDisplay
        ? (this.needToBeDisplay = false)
        : (this.needToBeDisplay = true);
    },
  },
  components:{
    UserModalInfo,
  }
};
</script>

