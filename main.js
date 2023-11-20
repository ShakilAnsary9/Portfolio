const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    removeActiveClass();
    navLink.classList.add("active");
    window.location.href = navLink.href;
  });
});

function removeActiveClass() {
  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
  });
}

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
