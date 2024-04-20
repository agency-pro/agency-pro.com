<template>
  <section
    class="page-banner-area overlay pt-220 rpt-150 pb-170 rpb-100 rel z-1 bgs-cover text-center"
    style="background-image: url(assets/images/banner/banner-bg.jpg)"
  >
    <div class="container">
      <div class="banner-inner rpt-10">
        <h2 class="page-title wow fadeInUp delay-0-2s">{{ pageName }}</h2>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
            <li class="breadcrumb-item">
              <NuxtLink href="/">Home</NuxtLink>
            </li>
            <li class="breadcrumb-item active">{{ pageName }}</li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageBanner",
  props: {
    pageName: {
      type: String,
      default: "",
    },
  },
};
</script>
