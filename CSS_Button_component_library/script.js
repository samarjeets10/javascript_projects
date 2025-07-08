
// Dark and Light Mode Btn :

const modeBtn = document.querySelector('.mode-btn');

modeBtn.addEventListener('click', () => {
    modeBtn.classList.toggle('active');
    document.body.classList.toggle('dark-Mode');
})