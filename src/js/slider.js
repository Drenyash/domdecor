import Swiper, {Navigation, Pagination} from "swiper";

Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".swiper", {
    loop: false,
    pagination: {
        el: '.slider__pagination',
        type: 'bullets',
        bulletClass: 'slider__pagination-bullet',
        bulletActiveClass: 'slider__pagination-bullet_active',
        clickable: true,
    },
    navigation: {
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev',
        disabledClass: 'slider__button_disabled',
    },
});