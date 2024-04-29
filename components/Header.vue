<template>
  <header class="main-header menu-absolute">
    <!--Header-Upper-->
    <div class="header-upper">
      <div class="container container-1620 clearfix">
        <div class="header-inner rpy-10 rel d-flex align-items-center">
          <div class="logo-outer">
            <div class="logo">
              <NuxtLink href="/"
                ><img
                  src="/assets/images/logos/logo.png"
                  alt="Agency PRO"
                  title="Agency PRO"
                  height="40"
                  width="161"
              /></NuxtLink>
            </div>
          </div>

          <div class="nav-outer ms-lg-auto clearfix">
            <!-- Main Menu -->
            <nav class="main-menu navbar-expand-lg">
              <div class="navbar-header py-10">
                <div class="mobile-logo">
                  <NuxtLink href="/">
                    <img
                      src="/assets/images/logos/logo.png"
                      alt="Logo"
                      title="Agency PRO"
                      width="161"
                    />
                  </NuxtLink>
                </div>

                <!-- Toggle Button -->
                <button
                  type="button"
                  class="navbar-toggle"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse"
                >
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>

              <div class="navbar-collapse collapse clearfix">
                <ul
                  class="navigation onepage clearfix"
                  v-if="singlePage == true"
                >
                  <li><a href="#home">home</a></li>
                  <li><a href="#about">about</a></li>
                  <li><a href="#services">services</a></li>
                </ul>
              </div>
            </nav>
            <!-- Main Menu End-->
          </div>

          <!-- Menu Button -->
          <div class="menu-btns">
            <!-- menu sidbar -->
            <div class="menu-sidebar">
              <a href="https://calendar.agency-pro.com/agency-pro" target="_blank">
                <i class="fa fa-calendar-alt" alt="Agendar Reunião" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End Header Upper-->
  </header>
</template>

<script>

export default {
  name: "Header",
  props: {
    singlePage: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
