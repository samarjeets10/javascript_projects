
// Dark and Light Mode Btn :

const modeBtn = document.querySelector('.mode-btn');
const thumbBtn = document.querySelector('.thumb');
const bodyBG = document.querySelector('body');

modeBtn.addEventListener('click', () => {
    thumbBtn.classList.toggle('mode-active');
    bodyBG.classList.toggle('dark-Mode');
});

