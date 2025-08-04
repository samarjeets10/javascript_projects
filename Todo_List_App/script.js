
const inputTask = document.getElementById('input-task');
const inputDate = document.getElementById('input-date');
const addTaskBtn = document.getElementById('add-task-btn');
const taskContent = document.querySelector('.task-content');
const defaultCard = document.querySelector('.default-task');
const taskContainer = document.querySelector('.task-container');
const alertTosterPopup = document.querySelector('.alert-toster'); 

addTaskBtn.addEventListener('click', (task) => {
    task.preventDefault();

    let userInput = inputTask.value;
    let userDate = inputDate.value;
    
    vallidation(userInput, userDate);

});


function vallidation (userInput, userDate) {

    if (userInput === "" || userDate === "") {
        alertPopUp();
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
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
    `;

    taskContent.appendChild(containerEle);
    inputCleanUp();
}

function inputCleanUp () {
    inputTask.value = "";
    inputDate.value = "";
}

taskContainer.addEventListener('click', (event) => {

    if (event.target.classList.contains('delete-btn')) {
        const card = event.target.closest('.task-item');
        card.remove();
    }

    const remainingCards = taskContainer.querySelectorAll('.task-item');

    if(remainingCards.length === 0) {
        defaultCard.classList.remove('active');
    }
});




taskContainer.addEventListener('click', function(event) {

    if (event.target.classList.contains('complete-btn')) {
        const taskComplete = event.target.closest('.task-item');
        const taskText = taskComplete.querySelector('.inputTask');
        taskText.classList.toggle('completed');
    }
});



function alertPopUp() {

    alertTosterPopup.classList.add('active');

    setTimeout(() => {
        alertTosterPopup.classList.remove('active');
    }, 2000);
};






