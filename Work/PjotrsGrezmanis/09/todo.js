const taskAdder = document.querySelector('[type=submit]');
const myTasks   = document.querySelector('.myTasks');
const inputTask = document.querySelector('[name="task"]')
const tasks     = JSON.parse(localStorage.getItem('taskList')) || [];

let addTask = (event) => {
    let task =  {
        text: inputTask.value,
        done: false
    }
    tasks.push(task);
    saveToLocalStorage(task);
    loadFromLocalStorage();
}

let saveToLocalStorage = () => {
    localStorage.setItem('taskList', JSON.stringify(tasks));
};

let loadFromLocalStorage = () => {
    myTasks.innerHTML = "";
    let tasks = JSON.parse(localStorage.getItem('taskList')) || [] ;
    if (tasks) {
    tasks.map(task => {
        myTasks.innerHTML += `<li class="do">${task.text}</li>`;
    });
    }
};

let toggleDone = (event) => {
    const target = event.target;
    
   if (target.tagName === 'LI') {
    const index = Array.from(myTasks.children).indexOf(target);
    if (index !== -1) {
        tasks[index].done = !tasks[index].done;
   
    saveToLocalStorage();
    loadFromLocalStorage();
}
   }
};


taskAdder.addEventListener('click', addTask);
myTasks.addEventListener('click', toggleDone);
loadFromLocalStorage();

