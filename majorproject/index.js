var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var customSwiper = new Swiper(".myCustomSwiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  freeMode: true,
  pagination: {
    el: ".custom-swiper-pagination",
    clickable: true,
  },
  autoplay:{
    delay: 600,
    disableOninteraction: true,
  },
  loop:false,
  speed:50000,
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // When window width is less than 768px, show 1 slide
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // When window width is between 768px and 1024px, show 2 slides
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // When window width is greater than or equal to 1024px, show 3 slides (your original setting)
    1580: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});



document.addEventListener("DOMContentLoaded", function () {
  // Function to handle the intersection of elements
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Element is now visible on the screen
        animateValue(entry.target);
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }

  // Function to animate the value
  function animateValue(element) {
    let startValue = 0;
    let endValue = parseInt(element.getAttribute("data-val"));
    let duration = 4000; // Total animation duration in milliseconds
    let startTime;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const animatedValue = Math.floor(progress * endValue);

      element.textContent = animatedValue;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  // Create an Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  // Observe each element with the "num" class
  let valueDisplays = document.querySelectorAll(".num");
  valueDisplays.forEach((valueDisplay) => {
    observer.observe(valueDisplay);
  });
});
