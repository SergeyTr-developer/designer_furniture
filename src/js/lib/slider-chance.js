export function mediaSwaiper() {
  let breakpoint = window.matchMedia('(max-width: 575.98px)')
  if (breakpoint.matches) {
    let mySwiper = new Swiper('.last_chance__slider', {
      scrollbar: {
        el: '.last_chance__slider-scrollbar',
      },
      pagination: {
        type: 'fraction',
        el: '.last_chance__slider-pagination',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
      },
    })
  }
}
window.addEventListener('load', mediaSwaiper)
window.addEventListener('resize', mediaSwaiper)
