<template>
  <article class="wrapper main-layout">
    <div class="contact-index full main-layout">
      <ContactFilter @filter="onSetFilterBy" />
      <ContactList
        v-if="contacts"
        :contacts="filteredContacts"
        @remove="removeContact"
      />
    </div>
  </article>
</template>

<script>
import ContactFilter from "../cmps/contact-filter.vue";
import ContactList from "../cmps/contact-list.vue";

export default {
  data() {
    return {
      filterBy: {},
    };
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
    filteredContacts() {
      const regex = new RegExp(this.filterBy.txt, "i");
      return this.contacts.filter((contact) => regex.test(contact.name));
    },
  },
  async created() {
    this.$store.dispatch("loadContacts");
  },
  methods: {
    onSetFilterBy(filterBy) {
      this.filterBy = filterBy;
    },
    async removeContact(id) {
      try {
        console.log(id);
        await this.$store.dispatch({ type: "removeContact", id });
        // showSuccessMsg("Product removed");
      } catch (err) {
        console.log("error in remove contact in index", err);
        // showErrorMsg("Cannot remove product");
      }
    },
  },
  components: {
    ContactFilter,
    ContactList,
  },
};
</script>
