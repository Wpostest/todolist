let currentTasks = [];

const loadCurrentTasks = function(){
    const tasks = document.querySelectorAll(".todolist__task");

    tasks.forEach(function(item, index){
        currentTasks[index] = item.cloneNode(true);
    });
}

const addToCurrentTasks = function(task){
    currentTasks.push(task.cloneNode(true));
}

const removeFromCurrentTasks = function(task){
    const taskNumber = task.querySelector(".todolist__checkbox-done").id;
    let index = -1;

    for(let i = 0; i < taskCount(); i++){
        const currentTaskNumber = currentTasks[i].querySelector(".todolist__checkbox-done").id;

        if(currentTaskNumber == taskNumber){
            index = i;
            break; 
        }
    }

    if(index > -1){
        currentTasks.splice(index, 1);
    }
}

loadCurrentTasks();

