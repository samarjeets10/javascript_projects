
const inputTask = document.getElementById('input-task');
const inputDate = document.getElementById('input-date');
const addTaskBtn = document.getElementById('add-task-btn');
const form = document.querySelector('form');

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
    }
}




