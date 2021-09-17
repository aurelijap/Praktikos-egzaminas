// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 100,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
