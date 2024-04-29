<template>
  <div class="page-wrapper">
    <!-- main header -->
    <header class="main-header error-header menu-absolute">
      <!--Header-Upper-->
      <div class="header-upper">
        <div class="container container-1290 clearfix">
          <div class="header-inner py-50 rpy-10 rel d-flex align-items-center">
            <div class="error-page-logo me-auto">
              <div class="logo">
                <NuxtLink href="/"
                  ><img
                    src="/assets/images/logos/logo.png"
                    alt="Agency PRO"
                    title="Agency PRO"
                    width="60"
                /></NuxtLink>
              </div>
            </div>

            <!-- Nav Search -->
            <HeadersSearch />

            <!-- Menu Button -->
            <div class="menu-btns">
              <!-- menu sidbar -->
              <div class="menu-sidebar">
                <a href="https://calendar.agency-pro.com/agency-pro" target="_blank">
                  <img src="/assets/images/icons/toggler.svg" alt="Agendar Reunião" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End Header Upper-->
    </header>

    <HeadersSidebar />

    <!-- 404 Error Section Start -->
    <section
      class="error-section pt-220 rpt-120 pb-100 rpb-80 rel z-1"
      style="background-image: url(assets/images/hero/hero-two-bg.png)"
    >
      <div class="container container-1290">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="error-content rmb-55 wow fadeInRight delay-0-2s">
              <h1>OPPS!</h1>
              <div class="section-title mb-50 rmb-35">
                <h2>This Page Are Can't Be Found</h2>
              </div>
              <NuxtLink href="/" class="theme-btn style-two"
                >Go to Home <i class="far fa-arrow-right"></i
              ></NuxtLink>
              <div class="social-style-four d-flex mt-60 rmt-35">
                <a href="#"
                  ><i class="fab fa-facebook-f"></i> <span>Facebook</span></a
                >
                <a href="#"
                  ><i class="fab fa-twitter"></i> <span>Twitter</span></a
                >
                <a href="#"
                  ><i class="fab fa-dribbble"></i> <span>Dribbble</span></a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="error-image wow zoomIn delay-0-2s">
              <img
                src="/assets/images/background/404-error.png"
                alt="404 Error"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 404 Error Section End -->
  </div>
</template>

<script>
export default {
  name: "404",
  methods: {
    toggleSidebar() {
      document.querySelector("body").classList.add("side-content-visible");
    },
  },
};
</script>
