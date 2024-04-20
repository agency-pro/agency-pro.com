import WOW from "wow.js";

export const ygencyUtilits = {
  wowjs() {
    // Create a new instance of WOW.js
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: false, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  },
  counterUp() {
    const elements = document.querySelectorAll(".counter-text-wrap");

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleCounterText(element) {
      const countText = element.querySelector(".count-text");
      const stopValue = parseInt(countText.getAttribute("data-stop"), 10);
      const speed = parseInt(countText.getAttribute("data-speed"), 10);

      if (!element.classList.contains("counted") && isInViewport(element)) {
        element.classList.add("counted");
        let start = 0;
        const step = Math.ceil(stopValue / (speed / 10));

        const interval = setInterval(() => {
          start += step;
          countText.textContent = Math.min(start, stopValue);

          if (start >= stopValue) {
            clearInterval(interval);
            countText.textContent = stopValue;
          }
        }, 10);
      }
    }

    window.addEventListener("scroll", () => {
      elements.forEach((element) => {
        if (!element.classList.contains("counted")) {
          handleCounterText(element);
        }
      });
    });
  },
  scrollTop() {
    let scrollUp = document.querySelector(".scroll-top"),
      lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      let st = window.scrollY;
      if (st > 110) {
        scrollUp.style.display = "block";
      } else {
        scrollUp.style.display = "none";
      }
    });
  },
};
