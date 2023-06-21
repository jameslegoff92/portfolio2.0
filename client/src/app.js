import { tagClouds } from './js/GoogleTag.js';
import { removeLoadingAnimation } from './js/animations.js';
import Masonry from 'masonry-js';


removeLoadingAnimation();
tagClouds();

var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  columnWidth: '.grid-item',
  itemSelector: '.grid-item',
  gutter: 10,
  percentPosition: true,
});