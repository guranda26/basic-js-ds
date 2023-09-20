<template>
  <div>
    <form>
      <div>
        <input type="email" placeholder="" />
      </div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>{{ buttonText }}</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: [`buttonText`],
  //buttonText: String
};
</script>
