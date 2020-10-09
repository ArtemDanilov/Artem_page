import anime from 'animejs/lib/anime.es.js';

export function desktopAnimation() {
    anime({
        targets: '.name__letter--a',
        fontSize: [`40rem`, `10rem`],
        delay: 1000,
        duration: 500,
        easing: 'easeOutBounce'
      });

      anime({
        targets: '.name__letter--r',
        opacity: [0 , 1],
        delay: 1700,
        duration: 500,
        easing: 'easeOutQuart'
      });

      anime({
        targets: '.name__letter--t',
        opacity: [0 , 1],
        delay: 1800,
        duration: 500,
        easing: 'easeOutQuart'
      });

      anime({
        targets: '.background__filter',
        opacity: 0.75,
        delay: 2300,
        duration: 1000,
        easing: 'easeOutQuad'
      });

      anime({
        targets: '.animation-display',
        opacity: [0, 1],
        delay: 2300,
        duration: 1000,
        easing: 'easeOutQuart'
      });
}

export function mobileAnimation() {
  anime({
    targets: '.name',
    opacity: [0, 1],
    translateY: [`-10%`, `-50%`],
    translateX: [`-50%`, `-50%`],
    delay: 500,
    duration: 600,
  });

  anime({
    targets: '.footer__links',
    opacity: [0, 1],
    translateY: [`30%`, 0],
    delay: 600,
    duration: 600,
  });

  anime({
    targets: '.footer__contact',
    opacity: [0, 1],
    translateY: [`30%`, 0],
    delay: 700,
    duration: 600,
  });
}