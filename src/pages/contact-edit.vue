<template>
  <section class="contact-edit">
    <form
      @submit.prevent="onSave"
      v-if="contact"
      class="contact-edit main-layout"
    >
      <h1>{{ getTitle }}</h1>
      <img :src="contact.imgUrl" alt="" />
      <input
        type="text"
        v-model="contact.name"
        placeholder="Enter contact name..."
      />
      <input
        type="text"
        v-model="contact.email"
        placeholder="Enter contact email..."
      />
      <input
        type="text"
        v-model.number="contact.phone"
        placeholder="Enter contact phone..."
      />
      <div class="btns">
      <button class="primary">Save</button>
      <RouterLink to="/contact">
        <button>Back</button>
      </RouterLink>
      </div>
    </form>
  </section>
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
    if (contactId) {
      this.contact = await contactService.getById(contactId);
    } else {
      this.contact = contactService.getEmptyContact();
    }
  },
  methods: {
    async onSave() {
      await contactService.save(this.contact);
      this.$router.push("/contact");
    },
  },
  computed: {
    getTitle() {
      return (this.contact._id ? "Edit" : "Add") + " Contact";
    },
  },
};
</script>
