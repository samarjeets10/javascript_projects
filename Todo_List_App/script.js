
const input = document.getElementById('task');
const addBtn = document.getElementById('add-btn');
const listContainer = document.querySelector('.task-list');


addBtn.addEventListener('click', () => {
    validateInput();
});

function validateInput() {

    if (input.value === "") {
        console.log("Please enter a valid Task");
    } else {
        addTaskList();
    }
};


function addTaskList() {
    
    let inputValue = input.value;
    
    const taskElement = document.createElement('li');
    const taskRemove = document.createElement('button');

    taskElement.setAttribute('class', 'task-item');

    taskElement.innerHTML = 
            `<p class="task-content">${inputValue}</p>
            <button class="button">
                <i class="fa-regular fa-trash-can"></i>
            </button>
            `
    
    listContainer.appendChild(taskElement);
    input.value = "";
};


// Event Deligation :


listContainer.addEventListener('click', (e) => {

    //console.log(e.target);

    if (e.target.closest('.button')) {
        const newTask = e.target.closest('.task-item');
        newTask.remove(); 
    }
})
