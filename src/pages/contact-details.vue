<template>
  <article class="wrapper full main-layout">
    <div class="contact-details full main-layout">
      <div v-if="contact">
          <img :src="contact.imgUrl" alt="" class="" />
        <div class="props">
          <div>
            <h2 class="">{{ contact.name }}</h2>
            <h2 class="">{{ contact.email }}</h2>
            <h2 class="">{{ contact.phone }}</h2>
          </div>

          <RouterLink to="/contact">
            <button>Back</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { contactService } from "../services/contact-service.js";

export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const contactId = this.$route.params._id;
    this.contact = await contactService.getById(contactId);
  },
};
</script>
