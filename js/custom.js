  // Show/hide scroll-to-top button
  window.addEventListener("scroll", function () {
    const scrollBtn = document.querySelector(".scroll-to-top1");
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // Smooth scroll to top
  document.querySelector(".scroll-to-top1").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });