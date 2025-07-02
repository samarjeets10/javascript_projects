
let notes = [];

function saveNote (event) {
    
    const title = document.getElementById('noteTitle').value.trim();
    const content  = document.getElementById('noteContent').value.trim();

    notes.unshift({
        id: generateId(),
        title: title,
        content: content
    })

    storeNotesInLocalStorage();

}

function generateId() {
    return Date.now().toString();
}

function storeNotesInLocalStorage() {
    localStorage.setItem('quickNotes', JSON.stringify(notes));
}


const addBtn = document.querySelector('.add-note-btn');
const closeBtn = document.querySelector('.close-btn')

addBtn.addEventListener('click', openNotesDialog);
closeBtn.addEventListener('click', closeNotesDialog);


function renderNotes() {

    const notesContainer = document.getElementById('notesContainer');

    notesContainer.innerHTML = `
        <div class="empty-state">
            <h2>No notes yet</h2>
            <p>Create your first note to get started.</p>
            <button class="add-note-btn" onClick="openNotesDialog()">+ Add Your First Note</button>
        </div>
    `;
    return;
}



function openNotesDialog() {

    const dialog = document.getElementById('noteDialog');
    const titleInput = document.getElementById('noteTitle');
    const contentInput = document.getElementById('noteContent');

    dialog.showModal();
    titleInput.focus();
}

function closeNotesDialog() {
    document.getElementById('noteDialog').closest('dialog').close();
}

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('noteForm').addEventListener('submit', saveNote);

    document.getElementById('noteDialog').addEventListener('click', function(event) {
        if (event.target === this) {
            closeNotesDialog();
        }
    })
})