const formAddTask = document.querySelector('.todolist__form-add-task');
const todoList = document.querySelector('.todolist');

const createTask = (inputValue) =>{
    const task = document.createElement('li');
    task.className = "todolist__task";

    const label = document.createElement('label');
    label.htmlFor = "task-" + (taskCount() + 1);
    label.className = "todolist_task-label";

    const checkboxDone = document.createElement('input');
    checkboxDone.type = "checkbox";
    checkboxDone.className = "todolist__checkbox-done";
    checkboxDone.id = "task-" + (taskCount() + 1);

    const taskText = document.createElement('span');
    taskText.className = "todolist__task-text";
    taskText.textContent = inputValue;

    const checkboxStar = document.createElement('input');
    checkboxStar.type = "checkbox";
    checkboxStar.className = "todolist__checkbox-star";

    const backgroundAnimation = document.createElement('div');
    backgroundAnimation.className = "checbox-done_background_animation";

    task.appendChild(label);
    task.appendChild(checkboxDone);
    task.appendChild(taskText);
    task.appendChild(checkboxStar);
    task.appendChild(backgroundAnimation);

    return task;
};

const addTask = () =>{
    event.preventDefault();
    event.stopPropagation();
    const input = event.target.querySelector('.todolist__add-task');
    if(input.value === ""){ return; };
    const task = createTask(input.value);
    //todoList.appendChild(task);
    input.value = "";
    chartRefresh();
    addToCurrentTasks(task);
    reloadTasks();
    loadCheckboxEvent();
};

formAddTask.addEventListener('submit', addTask);