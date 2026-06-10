(function () {
  "use strict";

  var doc = document;
  var reducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------ */
  /* Mobile navigation                                                    */
  /* ------------------------------------------------------------------ */
  var toggle = doc.querySelector("[data-menu-toggle]");
  var nav = doc.querySelector("[data-site-nav]");

  function menuIsOpen() {
    return nav && nav.classList.contains("is-open");
  }

  function closeMenu(returnFocus) {
    if (!menuIsOpen()) {
      return;
    }
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    if (returnFocus) {
      toggle.focus();
    }
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a") && window.innerWidth < 960) {
        closeMenu(false);
      }
    });

    doc.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu(true);
      }
    });

    doc.addEventListener("click", function (event) {
      if (
        menuIsOpen() &&
        window.innerWidth < 960 &&
        !nav.contains(event.target) &&
        !toggle.contains(event.target)
      ) {
        closeMenu(false);
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 960) {
        closeMenu(false);
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* Sticky header shadow                                                 */
  /* ------------------------------------------------------------------ */
  var header = doc.querySelector("[data-site-header]");

  if (header) {
    var updateHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 4);
    };
    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();
  }

  /* ------------------------------------------------------------------ */
  /* Launch banner: counts down to July 1, 2026, then announces the      */
  /* new name automatically. No edits required on launch day.            */
  /* ------------------------------------------------------------------ */
  var note = doc.querySelector("[data-transition-note]");

  if (note) {
    var headline = note.querySelector("[data-launch-headline]");
    var dateLabel = note.querySelector("[data-launch-date]");
    var count = note.querySelector("[data-launch-count]");
    var launch = new Date(2026, 6, 1); // July 1, 2026 (local time)
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var daysOut = Math.round((launch - today) / 86400000);

    if (daysOut > 1 && count) {
      count.textContent = "Opening in " + daysOut + " days";
      count.hidden = false;
    } else if (daysOut === 1 && count) {
      count.textContent = "Opening tomorrow";
      count.hidden = false;
    } else if (daysOut === 0 && count) {
      count.textContent = "Opening today";
      count.hidden = false;
    } else if (daysOut < 0 && headline && dateLabel) {
      headline.textContent = "Gateway Auto Repair is now Eikos West";
      dateLabel.textContent = "Same shop. Same crew. New name.";
    }
  }

  /* ------------------------------------------------------------------ */
  /* Scroll reveal (progressive enhancement; off for reduced motion)     */
  /* ------------------------------------------------------------------ */
  if (!reducedMotion && "IntersectionObserver" in window) {
    var selector = [
      ".service-card",
      ".value",
      ".feature-card",
      ".pricing-card",
      ".step",
      ".crew-card",
      ".timeline-item",
      ".repair-list article",
      ".contact-card",
      ".faq details",
      ".portrait-slot",
      ".review-ready",
      ".rating",
      ".promise",
      ".privacy-panel",
      ".story-prompts"
    ].join(", ");

    var items = Array.prototype.slice.call(doc.querySelectorAll(selector));

    if (items.length) {
      var groupIndex = new WeakMap();

      items.forEach(function (item) {
        var parent = item.parentElement;
        var index = groupIndex.get(parent) || 0;
        groupIndex.set(parent, index + 1);
        item.style.setProperty(
          "--reveal-delay",
          Math.min(index, 4) * 70 + "ms"
        );
        item.classList.add("reveal");
      });

      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );

      items.forEach(function (item) {
        observer.observe(item);
      });
    }
  }
})();
