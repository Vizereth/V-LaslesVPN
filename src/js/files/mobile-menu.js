const toggleMobileMenu = (() => {
  const toggle = () => {
    const iconMenu = document.querySelector(".icon-menu");
    const menu = document.querySelector(".header__mobile-menu");

    if (!menu.classList.contains("header__mobile-menu--active")) {
      menu.classList.add("header__mobile-menu--active");
      iconMenu.classList.add("icon-menu--active");
    } else {
      menu.classList.remove("header__mobile-menu--active");
      iconMenu.classList.remove("icon-menu--active");
    }
  };

  const iconMenu = document.querySelector(".icon-menu");

  iconMenu.addEventListener("click", toggle);
})();
