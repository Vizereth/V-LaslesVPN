import { scrollIntoView } from "scroll-js";

const initScroll = (() => {
  const storage = {
    1: {
      link: document.querySelector(".menu__link--about"),
      linkMobile: document.querySelector(".mobile-menu__link--about"),
      scrollsTo: document.querySelector(".start"),
    },
    2: {
      link: document.querySelector(".menu__link--features"),
      linkMobile: document.querySelector(".mobile-menu__link--features"),
      scrollsTo: document.querySelector(".features"),
    },
    3: {
      link: document.querySelector(".menu__link--pricing"),
      linkMobile: document.querySelector(".mobile-menu__link--pricing"),
      scrollsTo: document.querySelector(".plan"),
    },
    4: {
      link: document.querySelector(".menu__link--testimonials"),
      linkMobile: document.querySelector(".mobile-menu__link--testimonials"),
      scrollsTo: document.querySelector(".reviews"),
    },
    5: {
      link: document.querySelector(".menu__link--help"),
      linkMobile: document.querySelector(".mobile-menu__link--help"),
      scrollsTo: document.querySelector(".footer"),
    },
  };

  for (const key in storage) {
    const linkEl = storage[key]["link"];
    const linkMobileEl = storage[key]["linkMobile"];
    const scrollToEl = storage[key]["scrollsTo"];

    if (linkEl) {
      linkEl.addEventListener("click", () => {
        scrollIntoView(scrollToEl, document.body, { behavior: "smooth" });
      });
    }

    if (linkMobileEl) {
      linkMobileEl.addEventListener("click", () => {
        scrollIntoView(scrollToEl, document.body, { behavior: "smooth" });
      });
    }
  }
})();

