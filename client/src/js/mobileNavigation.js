const openNav = document.getElementById("open-nav");
const closeNav = document.getElementById("close-nav");
const mobileNavContainer = document.querySelector(".mobile-nav-container");

export const setMobileNavControl = () => {
  openNav.addEventListener("click", () => {
    mobileNavContainer.style.display = "flex";
    openNav.style.display = "hidden";
    closeNav.style.display = "inline";
  });

  closeNav.addEventListener("click", () => {
    mobileNavContainer.style.display = "none";
    openNav.style.display = "inline";
    closeNav.style.display = "none";
  });
};
