<template>
<section class="full main-layout">
  <div class="contact-filter">
  <input
    type="text"
    name="Search"
    v-model="filterBy.txt"
    @input="onFilter"
    placeholder="Filter contacts..."
    class="filter-input"
  />
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        txt: "",
      },
    };
  },
  emits: ["filter"],
  methods: {
    onFilter() {
      this.$emit("filter", this.filterBy);
    },
  },
};
</script>
