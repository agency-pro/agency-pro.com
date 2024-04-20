<template>
  <div class="page-wrapper">
    <Header :singlePage="singlePage" />
    <slot />
    <Footer :footer="footer" />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
import { ygencyUtilits } from "~/utilits";
import Header from "../components/Header.vue";

export default {
  name: "YgencyLayout",
  props: {
    header: {
      type: Number,
      default: 0,
    },
    footer: {
      type: Number,
      default: 1,
    },
    singlePage: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Header,
    Footer,
  },
  mounted() {
    ygencyUtilits.wowjs();
  },
};
</script>
