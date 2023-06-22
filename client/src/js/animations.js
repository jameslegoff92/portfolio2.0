import $ from 'jquery';

export const removeLoadingAnimation = () => {
  const loadingAnimation = document.querySelector('.loading-animation');
  const body = document.querySelector('body');
  
  setTimeout(() => {
    loadingAnimation.style.display = 'none';
    body.style.background = 'white';
    body.style.overflowY = 'scroll';
  }, 3000)
}

export const toggleMobileNavigation = () => {
  $('.hamburger').on('click', function() {
		$(this).toggleClass('open');
	});
}