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
    // const scrollSpeed = 0.999; // Adjust this value (0.1 to 1) — higher is faster
window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  // const scrollStep = () => {
  //   const currentScroll = window.scrollY;
  //   if (currentScroll > 0) {
  //     window.scrollTo(0, currentScroll - currentScroll * scrollSpeed);
  //     requestAnimationFrame(scrollStep);
  //   }
  // };

  // requestAnimationFrame(scrollStep);
  // });
// document.querySelector(".scroll-to-top1").addEventListener("click", function () {
//   const duration = 2000; // in ms — increase this to slow it down
//   const start = window.scrollY;
//   const startTime = performance.now();

//   function scrollStep(currentTime) {
//     const elapsed = currentTime - startTime;
//     const progress = Math.min(elapsed / duration, 1); // 0 → 1

//     // easeInOutQuad easing
//     const ease = progress < 0.5
//       ? 2 * progress * progress
//       : -1 + (4 - 2 * progress) * progress;

//     window.scrollTo(0, start * (1 - ease));

//     if (progress < 1) {
//       requestAnimationFrame(scrollStep);
//     }
//   }

//   requestAnimationFrame(scrollStep);
});


  //  const serviceItem = document.querySelector('li > a[href="services.html"]');
  //  console.log(serviceItem)
  //  serviceItem.addEventListener('mouseenter', function(){
  //   console.log('===========')
  //   window.location.href = "services.html"
  //  })
  // const serviceSubmenu = serviceItem.nextElementSibling;
  // console.log(serviceSubmenu)

