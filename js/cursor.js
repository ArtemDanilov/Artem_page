const cursorMain = document.querySelector('.small-circle')
const cursorSecondary = document.querySelector('.big-circle')

const cursorDelay = 80;

export function cursorMove(e) {
    let x = e.clientX
    let y = e.clientY

    cursorMain.style.transform = `translate(${x}px,${y}px)`
    setTimeout( () => {cursorSecondary.style.transform = `translate(${x-11}px,${y-11}px)`}, cursorDelay)

    // if (e.target === document.querySelector('a')) {
    //     console.log('yes');
    //     cursorSecondary.style.padding = '2rem';
    // } else {
    //     cursorSecondary.style.padding = '0';
    // }
}