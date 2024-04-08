const openNav = document.querySelector(".open-nav-js");
console.log(openNav);
const closeNav = document.querySelector(".close-nav-js");
console.log(closeNav);
const mobileNavContainer = document.querySelector(".mobile-nav-container-js");
console.log(mobileNavContainer);
const body = document.querySelector(".body-js");

export const setMobileNavControl = () => {
  openNav.addEventListener("click", () => {
    openNav.style.visibility = "hidden";
    closeNav.style.visibility = "visible";
    mobileNavContainer.classList.add("slide-in-left");
    mobileNavContainer.classList.remove("slide-out-left");
  });

  closeNav.addEventListener("click", () => {
    openNav.style.visibility = "visible";
    closeNav.style.visibility = "hidden";
    mobileNavContainer.classList.add("slide-out-left");
    mobileNavContainer.classList.remove("slide-in-left");
  });
};