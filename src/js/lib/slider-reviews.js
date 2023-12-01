import { mediaSwaiper } from './slider-chance.js'

document.addEventListener('DOMContentLoaded', function () {
  mediaSwaiper()
})

let mySwiperUnique = new Swiper('.mySwiperUnique', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.mySwiperButtonNextUnique',
    prevEl: '.mySwiperButtonPrevUnique',
  },

  pagination: {
    el: '.mySwiperPaginationUnique',
    clickable: true,
  },
})
