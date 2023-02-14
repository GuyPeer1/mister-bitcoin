<template>
<section class="home-page">
  <h2>Hello, {{user.name}}</h2>
  <h2>Bitcoin to $: {{exchangeRate}}</h2>
   <img :src="user.imgUrl" alt="contact" />
</section>
</template>

<script>
import { bitService } from "../services/bitService.js";
import { userService } from "../services/userService.js";

export default {
  data() {
    return {
      user: userService.getUser(),
      exchangeRate: "",
    };
  },
  async created() {
    this.exchangeRate = await bitService.getRate();
  },
};
</script>

