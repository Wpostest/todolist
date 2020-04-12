const todolist = document.querySelector(".todolist");

const reloadTasks = function(){
    const tasks = document.querySelectorAll(".todolist__task");

    tasks.forEach(function(item){
        item.remove();
    });

    currentTasks.forEach(function(item){
        todolist.appendChild(item.cloneNode(true));
    });

    loadCheckboxEvent();
}