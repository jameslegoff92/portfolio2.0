import { tagClouds } from './js/GoogleTag.js';
import { removeLoadingAnimation } from './js/animations.js';
import { setProjectsLayout } from './js/masonry.js';
import { setMobileNavControl } from './js/mobileNavigation.js';

setMobileNavControl();
removeLoadingAnimation();
tagClouds();
setProjectsLayout();

