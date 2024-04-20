<template>
  <footer class="main-footer footer-five pt-100">
    <div class="container container-1290 pb-40">
      <div class="row justify-content-between">
        <div class="col-lg-4">
          <div class="footer-widget footer-about wow fadeInUp delay-0-2s">
            <div class="footer-logo mb-25">
              <NuxtLink href="/"
                ><img src="/assets/images/logos/logo-white.png" alt="Agency PRO" width="161"
              /></NuxtLink>
            </div>
            <p>
              Your Global Innovation Partner. We craft visionary software solutions tailored to your needs, blending creativity, technology, and user-centric design for digital success.
            </p>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="footer-widget footer-info wow fadeInUp delay-0-4s">
            <ul class="list-style-two">
              <li>
                <i class="far fa-envelope"></i>
                <a href="mailto:contract@agency-pro.com">contract@agency-pro.com</a>
              </li>
              <li>
                <i class="far fa-phone"></i>
                <a href="callto:+5579981160655">+5579981160655</a>
              </li>
              <li>
                <i class="far fa-clock"></i>
                <span>Monday - Friday, 07am - 18pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-area pt-25 pb-15">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="footer-copyright-text wow fadeInUp delay-0-2s">
              <p>
                Copyright @{{ new Date().getFullYear() }},
                <NuxtLink href="/">Agency PRO</NuxtLink>, CNPJ: 54.533.064/0001-87 All Rights Reserved
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div
              class="footer-bottom-menu text-lg-end wow fadeInRight delay-0-2s"
            >
              <ul>
                <li><NuxtLink href="/">Home</NuxtLink></li>
                <li><NuxtLink href="#">About</NuxtLink></li>
                <li><NuxtLink href="#">Services</NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
