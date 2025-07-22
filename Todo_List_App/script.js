
const inputTask = document.getElementById('input-task');
const inputDate = document.getElementById('input-date');
const addTaskBtn = document.getElementById('add-task-btn');
const taskContent = document.querySelector('.task-content');
const defaultCard = document.querySelector('.default-task');

addTaskBtn.addEventListener('click', (task) => {
    task.preventDefault();

    let userInput = inputTask.value;
    let userDate = inputDate.value;
    
    vallidation(userInput, userDate);

});


function vallidation (userInput, userDate) {

    if (userInput === "" || userDate === "") {
        alert("Please enter task and date");
    } else {
        addTask(userInput, userDate);
        defaultCardRemove();
    }
}


function defaultCardRemove () {

    defaultCard.classList.add('active');
}

function addTask(userInput, userDate) {

    const containerEle = document.createElement('div');
    containerEle.setAttribute('class', 'task-item');

    containerEle.innerHTML = `

        <div class="text-content">
            <h3 class="inputTask">${userInput}</h3>
            <span class="inputDate">${userDate}</span>
        </div>
        <button class="delete-btn">Delete</button>
    `;

    taskContent.appendChild(containerEle);
    inputCleanUp();
}

function inputCleanUp () {
    inputTask.value = "";
    inputDate.value = "";
}






