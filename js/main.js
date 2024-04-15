const burgerBtn = document.querySelector(".header__burger-btn"),
  openMenu = document.querySelector(".mobile-menu"),
  openCategoriesBtn = document.querySelector(".nav-link--categories"),
  categoriesPopup = document.querySelector(".open-categories-popup"),
  tabsVideo = document.querySelectorAll(".categories__tabs-item"),
  tabsContent = document.querySelectorAll(".categories__thumbnail");

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

const onTabClick = () => {
  for (let i = 0; i < tabsVideo.length; i++) {
    tabsVideo[i].addEventListener("click", (btns) => {
      btns.preventDefault();

      let tabId = tabsVideo[i].getAttribute("href");
      let currentTab = document.querySelector(tabId);

      if (!tabsVideo[i].classList.contains("tab--active")) {
        tabsVideo.forEach((item) => {
          item.classList.remove("tab--active");
        });

        tabsContent.forEach((tab) => {
          tab.classList.remove("content--active");
        });

        tabsVideo[i].classList.add("tab--active");
        currentTab.classList.add("content--active");
      }
    });
  }
};

onTabClick();

document.querySelector(".categories__tabs-item").click();
