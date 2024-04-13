const burgerBtn = document.querySelector(".header__burger-btn");
const openMenu = document.querySelector(".header__mobile-menu-content");

burgerBtn.addEventListener("click", () => {
  openMenu.classList.toggle("is-open");
  burgerBtn.classList.toggle("is-active");

  if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = null;
    } else {
        document.body.style.overflow = 'hidden';
    }
});
