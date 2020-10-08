import anime from 'animejs/lib/anime.es.js';

export function animation() {
    anime({
        targets: '.name__letter--a',
        fontSize: [`60rem`, `11rem`],
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