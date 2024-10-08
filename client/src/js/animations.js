import $ from 'jquery';

//This animation removes the loading animation after 6 seconds. Do not change the 6 seconds unless you change the timing of the mainHeadingAnimation in gsap.js
export const removeLoadingAnimation = () => {
  const loadingAnimation = document.querySelector('.loading-animation');
  const body = document.querySelector('body');
  const container = document.querySelector('.container');
  
  setTimeout(() => {
    loadingAnimation.style.display = 'none';
    body.style.overflowY = 'scroll';
    container.style.display = 'block';
  }, 6000)
}

export const toggleMobileNavigation = () => {
  $('.hamburger').on('click', function() {
		$(this).toggleClass('open');
	});
} 