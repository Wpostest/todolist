const realoadTags = () =>{
    const tasks = document.querySelectorAll(".todolist__task");

    if(tasks.length > 0){
        tasks.forEach((item, index) => {
            const label = item.querySelector(".todolist_task-label");
            const input = item.querySelector(".todolist__checkbox-done");
            label.htmlFor = "task-" + (index + 1);
            input.id = "task-" + (index + 1);
        });

        currentTasks.forEach((item, index) => {
            const label = item.querySelector(".todolist_task-label");
            const input = item.querySelector(".todolist__checkbox-done");
            label.htmlFor = "task-" + (index + 1);
            input.id = "task-" + (index + 1);
        });
    }
}