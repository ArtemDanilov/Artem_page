const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('#link')

const cursorDelay = 50;

export function cursorMove(e) {
    let x = e.clientX;
    let y = e.clientY;

    setTimeout(() => {
        cursor.style.top = `${y}px`;
        cursor.style.left = `${x}px`;
    }, cursorDelay)
}

export function activeLinks() {

    for (const link of links) {
        link.addEventListener('mouseover', () => {
            cursor.classList.add('cursor-active');
        })
        link.addEventListener('mouseout', () => {
            cursor.classList.remove('cursor-active');
        })
    }
}