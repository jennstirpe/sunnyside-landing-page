const navBtn = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-links")

navBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show-nav");
})