(() => {
  'use strict';
 
    //DOM manipulation code here
		let refOffset = 0;
		let visible = true;
		const bannerHeight = 100;
		const bannerWrapper = document.querySelector('.banner-wrapper');
		const banner = document.querySelector('.banner');

		function animateOut() {
		  bannerWrapper.style.transform = `translateY(-${bannerHeight}px)`;
		  bannerWrapper.style.msTransform = `translateY(-${bannerHeight}px)`;
		  bannerWrapper.style.webkitTransform = `translateY(-${bannerHeight}px)`;
		  bannerWrapper.style.MozTransform = `translateY(-${bannerHeight}px)`;
		  banner.style.background = 'rgba(255, 255, 255, 0.6)';
		}

		function animateIn() {
		  bannerWrapper.style.transform = 'translateY(0px)';
		  bannerWrapper.style.msTransform = 'translateY(0px)';
		  bannerWrapper.style.webkitTransform = 'translateY(0px)';
		  bannerWrapper.style.MozTransform = 'translateY(0px)';
		  banner.style.background = 'rgba(255, 255, 255, 0.6)';
		}

		const handler = () => {
		const newOffset = window.scrollY || window.pageYOffset;
			
			if (newOffset > bannerHeight) {
			  if (newOffset > refOffset) {
			    animateOut();
			  } else {
			    animateIn();
			  }

			  refOffset = newOffset;
			} else {
			  banner.style.backgroundColor = 'rgba(255, 255, 255, 1)';
			}

		
		  };

  	window.addEventListener('scroll', handler, false);
})();
