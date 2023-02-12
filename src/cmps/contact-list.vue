<template>
  <ul class="contact-list">
    <li v-for="contact in contacts" :key="contact._id">
      <ContactPreview :contact="contact"></ContactPreview>
      <div class="list-btns">
        <RouterLink class="details" :to="`/contact/${contact._id}`">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"
            />
          </svg>
        </RouterLink>
        <button @click="onRemoveContact(contact._id)" class="btn-delete">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
import contactPreview from "@/cmps/contact-preview.vue";

export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onRemoveContact(id) {
      this.$emit("remove", id);
    },
  },
  emits: ["remove"],
  components: {
    ContactPreview: contactPreview,
  },
};
</script>
