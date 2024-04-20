<template>
  <NuxtLayout name="ygency" :header="0" :footer="5" :singlePage="true">
    <!-- Hero Section Start -->
    <section id="home" class="hero-area pt-185 rpt-150 rel z-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="hero-content wow fadeInLeft delay-0-2s">
              <h1>Digital <span>solutions</span></h1>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="hero-right-image mt-20 wow fadeInUp delay-0-4s">
              <img src="/assets/images/hero/hero-right.png" alt="Hero"/>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="hero-bottom-image">
          <img src="/assets/images/hero/hero.jpg" alt="Hero"/>
          <div class="hero-social">
            <a href="https://github.com/agency-pro" target="_blank"><i class="fab fa-github-alt"></i> <span>Github</span></a>
            <a href="https://x.com/agencypro_com" target="_blank"><i class="fab fa-twitter"></i> <span>Twitter</span></a>
            <a href="https://www.instagram.com/agency_pro_com" target="_blank"><i class="fab fa-instagram"></i> <span>Instagram</span></a>
            <a href="#" target="_blank"><i class="fab fa-dribbble"></i> <span>Dribbble</span></a>
          </div>
        </div>
      </div>
      <div class="hero-bg">
        <img src="/assets/images/hero/hero-bg.png" alt="lines"/>
      </div>
    </section>
    <!-- Hero Section End -->

    <!-- About Us Area start -->
    <section id="about" class="about-area pt-130 rpt-100 rel z-1">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xl-5 col-lg-3">
            <div class="about-image rmb-45 wow fadeInUp delay-0-2s">
              <img
                  src="/assets/images/about/circle-text.svg"
                  alt="Circle Text"
              />
            </div>
          </div>
          <div class="col-xl-7 col-lg-9">
            <div class="about-content wow fadeInUp delay-0-4s">
              <div class="section-title mb-40">
                <span class="sub-title mb-15">About Company</span>
                <h2>Our Main Goal to Satisficed Local & Global Clients</h2>
              </div>
              <div class="content">
                <p>
                  Your Global Innovation Partner. We craft visionary software solutions tailored to your needs, blending creativity, technology, and user-centric design for digital success.
                </p>
                <NuxtLink class="read-more mt-10" href="#"
                >Read More <i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Us Area end -->

    <!-- Headline area start -->
    <div class="headline-area pt-90 rpt-85 rel z-1">
      <div class="container-fluid">
        <div class="headline-text marquee">
          <span>Design <span>of</span> Software</span>
        </div>
      </div>
    </div>
    <!-- Headline Area end -->

    <!-- What We Do start -->
    <section class="what-we-do-area pt-90 rpt-80 rel z-1">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xl-5 col-lg-8">
            <div class="what-we-do-content mb-55">
              <div class="section-title mb-60 wow fadeInUp delay-0-2s">
                <span class="sub-title mb-15">What We Do</span>
                <h2>Elevate Your Business with Custom Web Solutions, App Development, Marketing, and Automation.</h2>
              </div>
              <div class="what-we-do-item wow fadeInUp delay-0-3s">
                <div class="number">
                  <span>01</span>
                </div>
                <div class="content">
                  <h5>Mobile Solutions</h5>
                  <p>
                    Tailored mobile apps for iOS and Android, ensuring engaging user experiences.
                  </p>
                </div>
              </div>
              <div class="what-we-do-item wow fadeInUp delay-0-5s">
                <div class="number">
                  <span>02</span>
                </div>
                <div class="content">
                  <h5>Web Solutions</h5>
                  <p>
                    Modern, responsive websites crafted for effective online presence and performance.
                  </p>
                </div>
              </div>
              <div class="what-we-do-item wow fadeInUp delay-0-7s">
                <div class="number">
                  <span>03</span>
                </div>
                <div class="content">
                  <h5>Custome Solutions</h5>
                  <p>Bespoke solutions meeting your business's unique needs, from CMS to enterprise apps.</p>
                </div>
              </div>
              <div class="what-we-do-item wow fadeInUp delay-0-7s">
                <div class="number">
                  <span>04</span>
                </div>
                <div class="content">
                  <h5>Marketing Solutions</h5>
                  <p>
                    Comprehensive digital strategies driving brand visibility, leads, and sales, including SEO, PPC,
                    content, and social media.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="what-we-do-image mb-55 wow fadeInRight delay-0-2s">
              <img
                  src="/assets/images/services/what-we-do.jpg"
                  alt="What We Do"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- What We Do end -->

    <!-- Statistics Area start -->
    <div class="statistics-area pt-75 rpt-45 rel z-1">
      <div class="container">
        <CountersCounter/>
      </div>
    </div>
    <!-- Statistics Area end -->

    <!-- Service Style Three start -->
    <section id="services" class="service-three-area pt-70 rpt-40 rel z-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div
                class="section-title text-center mb-60 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-20">Popular Services</span>
              <h2>We Provide Amazing Web Design Solutions</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="service-three-item wow fadeInUp delay-0-2s">
              <div class="title-icon">
                <h5>
                  <NuxtLink href="#"
                  >Website Creation
                  </NuxtLink
                  >
                </h5>
              </div>
              <div class="content">
                <p>We denounce with righteous indignation dislike beguile</p>
                <NuxtLink class="read-more style-two" href="#"
                ><span>Read More</span> <i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="service-three-item wow fadeInDown delay-0-2s">
              <div class="title-icon">
                <h5>
                  <NuxtLink href="#"
                  >Performance Improvement
                  </NuxtLink
                  >
                </h5>
              </div>
              <div class="content">
                <p>At vero eos et accusamus et dignissim ducimbl ditiis</p>
                <NuxtLink class="read-more style-two" href="#"
                ><span>Read More</span> <i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="service-three-item wow fadeInUp delay-0-2s">
              <div class="title-icon">
                <h5>
                  <NuxtLink href="#"
                  >Technical consultancy
                  </NuxtLink
                  >
                </h5>
              </div>
              <div class="content">
                <p>To take trivial example which ever undertakes laborious</p>
                <NuxtLink class="read-more style-two" href="#"
                ><span>Read More</span> <i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="service-three-item wow fadeInDown delay-0-2s">
              <div class="title-icon">
                <h5>
                  <NuxtLink href="#">Marketing Campaigns</NuxtLink>
                </h5>
              </div>
              <div class="content">
                <p>Sed persiciatis unde omnisey natus error voluptatem</p>
                <NuxtLink class="read-more style-two" href="#"
                ><span>Read More</span> <i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Service Style Three end -->

    <!-- Headline area start -->
    <div class="headline-area pt-65 rpt-60 rel z-1">
      <div class="container-fluid">
        <div class="headline-text marquee">
          <span><span>Digital</span> solutions</span>
        </div>
      </div>
    </div>
    <!-- Headline Area end -->

    <!-- Why Choose Us Area start -->
    <section class="why-choose-area pt-90 rpt-60 rel z-1">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-7">
            <div class="why-choose-left-image mb-40 wow fadeInLeft delay-0-2s">
              <img
                  src="/assets/images/services/why-choose-left.jpg"
                  alt="Why Choose Left Image"
              />
            </div>
          </div>
          <div class="col-xl-5">
            <div class="why-choose-two-wrap">
              <div class="section-title mb-55 wow fadeInUp delay-0-2s">
                <span class="sub-title mb-15">Why Choose Us</span>
                <h2>We Provide Services In One Places</h2>
              </div>
              <div class="why-choose-item-two wow fadeInUp delay-0-3s">
                <div class="icon">
                  <i class="fas fa-check"></i>
                  <span class="icon-bottom-shape"></span>
                </div>
                <div class="content">
                  <h4>
                    <NuxtLink href="#"
                    >Guaranteed Results
                    </NuxtLink
                    >
                  </h4>
                  <p>
                    We pledge to deliver tangible and measurable results that drive your business's success. Our
                    results-driven approach ensures that each project is executed with a focus on achieving specific
                    goals and delivering concrete outcomes.
                  </p>
                </div>
              </div>
              <div class="why-choose-item-two wow fadeInUp delay-0-5s">
                <div class="icon">
                  <i class="fas fa-check"></i>
                  <span class="icon-bottom-shape"></span>
                </div>
                <div class="content">
                  <h4>
                    <NuxtLink href="#"
                    >Personalized and Proactive Service
                    </NuxtLink
                    >
                  </h4>
                  <p>
                    We provide personalized and proactive service, where each client is treated individually, and their
                    needs are prioritized. We're always available to listen to your concerns, address your questions,
                    and provide ongoing support throughout the process, ensuring an exceptional experience from start to
                    finish.
                  </p>
                </div>
              </div>
              <div class="why-choose-item-two wow fadeInUp delay-0-7s">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div class="content">
                  <h4>
                    <NuxtLink href="#"
                    >Continuous Innovation and Creativity
                    </NuxtLink
                    >
                  </h4>
                  <p>
                    We're passionate about innovation and creativity, constantly seeking new ways to exceed expectations
                    and elevate your brand in the market. Our talented and experienced team is always exploring new
                    technologies, trends, and strategies to ensure your project stands out and stays ahead of the
                    competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Why Choose Us Area end -->
  </NuxtLayout>
</template>

<script>
import {ygencyUtilits} from "~/utilits";

(function (d, t) {
  var BASE_URL = "https://chat.agency-pro.com";
  var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
  g.src = BASE_URL + "/packs/js/sdk.js";
  g.defer = true;
  g.async = true;
  s.parentNode.insertBefore(g, s);
  g.onload = function () {
    window.chatwootSDK.run({
      websiteToken: 'AgtwUxhGHmgd7uNFfLBZDSNU',
      baseUrl: BASE_URL
    })
  }
})(document, "script");

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-WLGHW7K124');

export default {
  name: "index",
  mounted() {
    ygencyUtilits.counterUp();
  },
};
</script>
