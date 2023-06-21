import Masonry from 'masonry-js';

export const setProjectsLayout = () => {
  var elem = document.querySelector('.grid');
  var msnry = new Masonry( elem, {
    columnWidth: '.grid-item',
    itemSelector: '.grid-item',
    gutter: 10,
    percentPosition: true,
  });
}