const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    speed: 1500,
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    speed: 1500,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
