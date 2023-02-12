<template>
  <article class="wrapper full main-layout">
    <div class="contact-details full main-layout">
      <div v-if="contact">
        <div class="">
          <img :src="contact.imgUrl" alt="" class="" />
        </div>
        <div class="">
          <div>
            <h2 class="">{{ contact.name }}</h2>
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
import { contactService } from "../services/contactService.js";

export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const contactId = this.$route.params._id;
    this.contact = await contactService.getContactById(contactId);
  },
};
</script>
