<template>
  <div class="about">
    <h1>ეს არის ჩვენ შესახებ გვერდი</h1>
    <AboutForm @theText="catchtheText" buttonText="click" />

    <p>{{ aboutText }}</p>
  </div>
</template>

<script>
import AboutForm from "@/components/AboutForm.vue";

export default {
  components: {
    AboutForm,
  },
  data() {
    return {
      aboutText: null,
    };
  },

  methods: {
    catchtheText(event) {
      this.aboutText = event;
    },
  },
};
</script>
