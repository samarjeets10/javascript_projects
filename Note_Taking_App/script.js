
const addNoteBtn = document.getElementById('addNoteBtn');
const cancleBtn = document.getElementById('cancleBtn');
const crossBtn = document.getElementById('cancle');
const dialogBox = document.querySelector('.dislog-box');
const saveNote = document.getElementById('saveBtn');
const inputTitle = document.getElementById('input-title');
const noteContainer = document.getElementById('notesContainer');
const noteDiscription = document.getElementById('text-area');
const darkModeBtn = document.getElementById('darkModeBtn');
let overlay = document.querySelector('.overlay');

let notes = [];




function saveNoteData() {

    let title = inputTitle.value.trim();
    let content = noteDiscription.value.trim();

    console.log(title);
    console.log(content);

    notes.unshift({
        id: Date.now().toString(),
        title: title,
        content: content
    })

    saveNotes();
    renderNotes();

}



// dark mode toggle
function darkMode() {
    document.body.classList.toggle('dark-theme');
}


// save notes to local storage
function saveNotes() {
    localStorage.setItem('quickNotes', JSON.stringify(notes));
}

function loadNotes() {
    const storedNotes = localStorage.getItem('quickNotes');
    if (storedNotes) {
        notes = JSON.parse(storedNotes);
        renderNotes();
    }
};




addNoteBtn.addEventListener('click', () => {
    dialogBox.classList.add('dialogActive');
    dialogBox.setAttribute('aria-hidden', 'false');
    overlay.classList.add('active');
});



function exitTask() {
    dialogBox.classList.remove('dialogActive');
    dialogBox.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('active');
};

// Render nots 

function renderNotes() {

    noteContainer.innerHTML = "";
    notes.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.setAttribute('class', 'note-card');
        noteCard.innerHTML = `
            <div class="note-card">
                <h2 class="note-title">${note.title}</h2>
                <p class="note-discription">${note.content}</p>
                <button id="deleteBtn">Delete Note</button>
            </div>
        `;
        
        noteContainer.appendChild(noteCard);
    });

    inputTitle.value = "";
    noteDiscription.value = "";
    exitTask();
}

document.addEventListener('DOMContentLoaded', function () {
    
    crossBtn.addEventListener('click', exitTask);
    cancleBtn.addEventListener('click', exitTask);
    saveNote.addEventListener('click', saveNoteData);
    darkModeBtn.addEventListener('click', darkMode);
    saveNote.addEventListener('click', renderNotes);
    loadNotes();
});

