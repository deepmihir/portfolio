const swiper = new Swiper('.swiper', {
    speed: 1000,
    autoHeight: true,
    autoplay: {
        delay: 1000,
    },
    centeredSlides : true,
    spaceBetween: 200,
    slidesPerView: 2,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
});
