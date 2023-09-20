<template>
  <div>
    <h1>This is contact page</h1>
    <ContactForm buttonText="click here" />
  </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";

export default {
  components: {
    ContactForm,
  },
};
</script>
