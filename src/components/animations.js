import { gsap } from "gsap";

gsap.from('.hero-left', {
    autoAlpha: -1,
    y: 50,
    duration: 1,
});

gsap.from('.top-layer', {
    autoAlpha: -1,
    y: -100,
    duration: 1,
    delay: 1
});

gsap.from('.middle-layer', {
    autoAlpha: -1,
    y: -100,
    duration: 1,
    delay: 0.5
});

gsap.from('.bottom-layer', {
    autoAlpha: -1,
    y: -200,
    duration: 1,
});

gsap.from('.focused', {
    autoAlpha: -1,
    y: 50,
    duration: 2,
});