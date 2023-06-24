import Masonry from "masonry-js";
import imagesLoaded from "imagesloaded";

export const setProjectsLayout = () => {
  var elem = document.querySelector(".grid");
  imagesLoaded(elem, function () {
    var msnry = new Masonry(elem, {
      columnWidth: ".grid-item",
      itemSelector: ".grid-item",
      gutter: 10,
      percentPosition: true,
    });
  });
};
