<template>
  <form @submit.prevent="onSaveTransaction">
    <fieldset>
      <legend>Transaction</legend>
      <input type="number" v-model="transaction.amount" />
    </fieldset>
  </form>
</template>

<script>
import { contactService } from "../services/contact.service";
import { showSuccessMsg } from "../services/eventBus.service";
import { userService } from "../services/user.service";
export default {
  props: ["contact"],
  data() {
    return {
      transaction: contactService.getEmptyTransaction(),
    };
  },
  methods: {
    async onSaveTransaction() {
      try {
        this.transaction.toId = this.contact._id;
        this.transaction.to = this.contact.name;
        await userService.updateUser(this.transaction);
        showSuccessMsg("Transaction has been made");
      } catch (err) {
        console.log(err)
      }
    },
  },
};
</script>