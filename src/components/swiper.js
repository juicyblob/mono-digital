import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 1000,
    threshold: 13,
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
});

