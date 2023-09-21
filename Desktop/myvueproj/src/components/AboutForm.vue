<template>
  <div>
    <form>
      <div>
        <textarea v-model="message"></textarea>
      </div>
      <div>
        <button type="button" @click="getText()">
          {{ buttonText }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: String,
  },
  data() {
    return {
      message: null,
    };
  },
  methods: {
    getText() {
      this.$emit("theText", this.message);
    },
  },
};
</script>
