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
    on: {
        init: function () {
            playActiveVideo(this);
        },

        slideChange: function () {
            pauseAllVideos();
            playActiveVideo(this);
        }
    }
});

function pauseAllVideos() {
    document.querySelectorAll('.swiper video').forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
}

function playActiveVideo(swiper) {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const video = activeSlide.querySelector('video');

    if (video) {
        video.play().catch(() => { });
    }
}

