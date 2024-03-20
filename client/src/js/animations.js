import $ from 'jquery';

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