const burgerBtn = document.querySelector(".header__burger-btn"),
  openMenu = document.querySelector(".mobile-menu"),
  openCategoriesBtn = document.querySelector(".btn-categories"),
  categoriesPopup = document.querySelector(".open-categories-popup"),
  popupLinks = document.querySelectorAll(".open-categories-popup a"),
  tabsVideo = document.querySelectorAll(".categories__tabs-item"),
  tabsContent = document.querySelectorAll(".categories__thumbnail"),
  btnCategory = document.querySelector(".btn-categories"),
  openDropdown = document.querySelector(".header__categories-mobile");

burgerBtn.addEventListener("click", () => {
  openMenu.classList.toggle("is-open");
  burgerBtn.classList.toggle("is-active");

  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = null;
  } else {
    document.body.style.overflow = "hidden";
  }

  if (!burgerBtn.classList.contains("is-active")) {
    openDropdown.classList.remove("is-open");
  }
});

const popupFunction = () => {
  openCategoriesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (categoriesPopup.classList.contains("is-open")) {
      console.log("close");
      closePopup();
    } else {
      console.log("open");
      openPopup();
    }
  });

  function openPopup(evt) {
    categoriesPopup.classList.add("is-open");
    btnCategory.classList.add("is-active");
    window.addEventListener("click", clickWithoutPopup);
  }

  function closePopup(evt) {
    categoriesPopup.classList.remove("is-open");
    btnCategory.classList.remove("is-active");
    window.removeEventListener("click", clickWithoutPopup);
  }

  function clickWithoutPopup(evt) {
    if (!evt.target.closest(".open-categories-popup")) {
      closePopup();
    }
  }
};

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

const tabAlone = document.querySelector(".categories__tabs-item");

if (tabAlone) {
  tabAlone.click();
}

const playButton = document.querySelector(".player__btn-play");
const video = document.querySelector(".player__video");
const videoContainer = document.querySelector(".player__video-wrapper");

const playVideo = () => {
  videoContainer.addEventListener("click", (evt) => {
    evt.preventDefault();

    if (
      evt.target.closest(".player__video") ||
      evt.target.closest(".player__btn-play")
    ) {
      if (video.paused === true) {
        video.play();
        playButton.classList.add("hide");
      } else {
        video.pause();
        playButton.classList.remove("hide");
      }
    }
  });
};

if (video) {
  playVideo();
}

const openDropDownMobile = () => {
  const mobileBtnCategory = document.querySelector(".btn-categories-mobile");

  mobileBtnCategory.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    mobileBtnCategory.classList.toggle("is-active");
    openDropdown.classList.toggle("is-open");

    console.log(e.tather);
  });
};

openDropDownMobile();
popupFunction();
onTabClick();
