<template>
  <div class="preloader" v-if="preloader == true">
    <div class="custom-loader"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preloader: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.preloader = false;
    }, 1000);
  },
};
</script>
