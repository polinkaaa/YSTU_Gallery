const sliderMain = new Swiper('.slider_main', {
    freeMode: true, // позволяет листать слайды без привязки к странице
    centeredSlides: true, // первый слайд в центре
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }
})
const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true, // первый слайд в центре
    parallax: true,
    slidesPerView: 3.5,
    spaceBetween: 60
})
sliderMain.controller.control = sliderBg

document.querySelectorAll('.slider__item').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('opened')
    })
})

let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})