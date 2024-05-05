const taskAdder = document.querySelector('[type=submit]');
const myTasks   = document.querySelector('.myTasks');
const inputTask = document.querySelector('[name="task"]')
const tasks     = JSON.parse(localStorage.getItem('taskList')) || [];

let addTask = (event) => {
    // event.preventDefault();
    let task =  {
        text: inputTask.value,
        done: false
    }

    saveToLocalStorage(task);
    loadFromLocalStorage();
}

let saveToLocalStorage = () => {
    localStorage.setItem('taskList', JSON.stringify(tasks));
};

let loadFromLocalStorage = () => {
    myTasks.innerHTML = "";
    let tasks = JSON.parse(localStorage.getItem('taskList'))
    tasks.map(task => {
        myTasks.innerHTML += `<li class="do">${task.text}</li>`;
    });
}

let toggleDone = (event) => {
    tasks[0].done = !tasks[0].done;
    saveToLocalStorage(tasks);
    loadFromLocalStorage();
}


taskAdder.addEventListener('click', addTask);
myTasks.addEventListener('click', toggleDone);
loadFromLocalStorage();