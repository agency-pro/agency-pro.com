<template>
  <div class="circle-progress">
    <CircleProgress
      :size="125"
      :percent="value"
      :border-width="25"
      :border-bg-width="25"
      :fillColor="'#55E6A5'"
      :emptyColor="'white'"
      :viewport="true"
      :linecap="'none'"
    />
  </div>
</template>

<script>
import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";
export default {
  name: "ProgressBar",
  props: {
    value: {
      type: Number,
      default: 50,
    },
  },
  components: { CircleProgress },
};
</script>
