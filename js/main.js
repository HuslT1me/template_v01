const burgerBtn = document.querySelector(".header__burger-btn"),
  openMenu = document.querySelector(".mobile-menu"),
  openCategoriesBtn = document.querySelector(".nav-link--categories"),
  categoriesPopup = document.querySelector(".open-categories-popup");

burgerBtn.addEventListener("click", () => {
  openMenu.classList.toggle("is-open");
  burgerBtn.classList.toggle("is-active");

  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = null;
  } else {
    document.body.style.overflow = "hidden";
  }
});

openCategoriesBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // categoriesPopup.classList.toggle("is-open");

  // window.addEventListener("click", (clickOnBody) => {
  //     if (clickOnBody.target === categoriesPopup) {
  //       categoriesPopup.classList.remove("is-open");
  //     }
  // })
});

