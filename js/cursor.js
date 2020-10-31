const cursorMain = document.querySelector('.cursor__main');
const cursorSecondary = document.querySelector('.cursor__secondary');
const links = document.querySelectorAll('#link')

const cursorDelay = 80;

export function cursorMove(e) {
    let x = e.clientX;
    let y = e.clientY;

    cursorMain.style.top = `${y}px`;
    cursorMain.style.left = `${x}px`;

    setTimeout(() => {
        cursorSecondary.style.top = `${y}px`;
        cursorSecondary.style.left = `${x}px`;
    }, cursorDelay)
}

export function activeLinks() {

    for (const link of links) {
        link.addEventListener('mouseover', () => {
            cursorSecondary.classList.add('cursor-active');
        })
        link.addEventListener('mouseout', () => {
            cursorSecondary.classList.remove('cursor-active');
        })
    }
}