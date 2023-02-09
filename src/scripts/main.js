'use strict';

const bgImage = document.querySelector('.content__header-wrapper');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#navigation') {
    bgImage.classList.add('content__header-wrapper--scroll-hide');
    document.body.classList.add('content--with-menu');
  } else {
    bgImage.classList.remove('content__header-wrapper--scroll-hide');
    document.body.classList.remove('content--with-menu');
  }
});
