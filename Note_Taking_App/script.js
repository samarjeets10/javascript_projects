
const addNoteBtn = document.getElementById('addNoteBtn');
const cancleBtn = document.getElementById('cancleBtn');
const crossBtn = document.getElementById('cancle');
const dialogBox = document.querySelector('.dislog-box');


addNoteBtn.addEventListener('click', () => {
    dialogBox.classList.add('dialogActive');
});

crossBtn.addEventListener('click', exitTask);

cancleBtn.addEventListener('click', exitTask);

function exitTask() {
    dialogBox.classList.remove('dialogActive');
}