import Swiper from 'swiper';

export const initSliderCommunity= () => {
  let communitySlider = document.querySelector('.community__slider');

  if (!communitySlider) {
    return;
  }

  const communitySwiper = new Swiper('.community__slider', {
    nested: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 32,

    pagination: {
      el: '.now__pags',
      type: 'custom',
      renderCustom(swiper, current, total) {
        let currentLine = `<span class="slider-controls__pagination-item swiper-pagination-current">${current}</span>`;
        let totalLine = `<span class="slider-controls__pagination-item swiper-pagination-total">${total}</span>`;
        return currentLine + totalLine;
      },
    },
    navigation: {
      nextEl: '.now__control--next',
      prevEl: '.now__control--prev',
    }
  });
};
