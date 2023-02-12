<template>
  <article class="wrapper main-layout">
  <div class="contact-index full main-layout">
    <!-- <ContactFilter @filter="onSetFilterBy" /> -->
    <ContactList
      v-if="contacts"
      :contacts="filteredContacts"
      @remove="removeContact"
    />
  </div>
  </article>
</template>

<script>
import { contactService } from "../services/contactService.js";
import ContactFilter from "../cmps/contact-filter.vue";
import ContactList from "../cmps/contact-list.vue";

export default {
  data() {
    return {
      contacts: null,
      filterBy: {},
    };
  },
  async created() {
    this.contacts = await contactService.getContacts();
    console.log("contacts", this.contacts);
  },
  methods: {
    onSetFilterBy(filterBy) {
      this.filterBy = filterBy;
    },
    async removeContact(id) {
      await contactService.deleteContact(id);
      this.contacts = this.contacts.filter((contact) => contact._id !== id);
    },
  },
  computed: {
    filteredContacts() {
      const regex = new RegExp(this.filterBy.txt, "i");
      return this.contacts.filter((contact) => regex.test(contact.name));
    },
  },
  components: {
    ContactFilter,
    ContactList,
  },
};
</script>
