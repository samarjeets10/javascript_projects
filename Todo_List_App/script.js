
const inputTask = document.getElementById('input-task');
const addTask = document.getElementById('add-task');
const taskContainer = document.querySelector('.task-container');
let userInput;


addTask.addEventListener('click', () => {

    if (inputTask.value === "") {
        alert("Pleases Enter a Valid Task!!")
    } else {
        userInput = inputTask.value;
        createTaskList();
    }
});


function createTaskList() {

    let listItem = `
                <li class="task-list">
                    <div class="task">
                        <input type="checkbox"id="check-box">
                        <p class="task-name">${userInput}</p>
                    </div>
                    <button class="delete-btn">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </li>`;

    let deleteBtn = document.querySelector('.delete-btn');
    console.log(deleteBtn);

    taskContainer.innerHTML += listItem;
    inputTask.value = "";
}
