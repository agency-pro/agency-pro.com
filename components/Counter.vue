<template>
  <div class="row justify-content-between">
    <div class="col-xl-2 col-lg-3 col-6">
      <div class="counter-item counter-text-wrap wow fadeInUp delay-0-2s">
        <i class="fal fa-check-circle"></i>
        <span class="count-text" data-speed="3000" data-stop="10">0</span>
        <span class="counter-title">Years Of Experience</span>
      </div>
    </div>
    <div class="col-xl-2 col-lg-3 col-6">
      <div class="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
        <i class="fal fa-check-circle"></i>
        <span class="count-text k" data-speed="3000" data-stop="1">0</span>
        <span class="counter-title">Project’s Complete</span>
      </div>
    </div>
    <div class="col-xl-2 col-lg-3 col-6">
      <div class="counter-item counter-text-wrap wow fadeInUp delay-0-4s">
        <i class="fal fa-check-circle"></i>
        <span class="count-text" data-speed="3000" data-stop="12">0</span>
        <span class="counter-title">Professionals Team Member</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ygencyUtilits } from "~/utilits";
export default {
  name: "Counter",
  mounted() {
    ygencyUtilits.counterUp();
  },
};
</script>
