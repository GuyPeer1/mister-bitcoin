<template>
  <div class="contact-preview">
    <img :src="'../src/assets/img/contact.png'" alt="contact" />
    <div class="preview-txt">
      <span>{{ contact.name }}</span>
      <span> {{ contact.email }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>
