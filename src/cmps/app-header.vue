<template>
  <article className="wrapper full main-layout" v-if="user">
    <header>
      <h2>Mister Bitcoin</h2>
       <div class="header-txt"> Hey there, {{ user.name }} 1 Bitcoin = {{ exchangeRate }}$ </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/stats">Stats</RouterLink>
        <RouterLink to="/contact">Contacts</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>
  </article>
</template>
<script>
import { userService } from "../services/userService.js";
import { bitService } from "../services/bitService.js";
export default {
  data() {
    return {
      user: null,
      exchangeRate: "",
    };
  },
  async created() {
    this.user = userService.getUser();
    this.exchangeRate = await bitService.getRate();
  },
};
</script>
