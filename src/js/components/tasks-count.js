const taskCount = () =>{
    return currentTasks.length;
}

const taskDoneCount = () =>{
    let count = 0;

    currentTasks.forEach(function(item){
        const checkbox = item.querySelector(".todolist__checkbox-done");

        if(checkbox.checked){
            count++;
        }
    })

    return count;
}