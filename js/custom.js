  // Show/hide scroll-to-top button
  window.addEventListener("scroll", function() {
    const scrollBtn = document.querySelector(".scroll-to-top1");
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // Smooth scroll to top
  document.querySelector(".scroll-to-top1").addEventListener("click", function (e) {
    const scrollSpeed = 1; // Adjust this value (0.1 to 1) — higher is faster

  const scrollStep = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 0) {
      window.scrollTo(0, currentScroll - currentScroll * scrollSpeed);
      requestAnimationFrame(scrollStep);
    }
  };

  requestAnimationFrame(scrollStep);
  });