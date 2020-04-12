const checkCheckboxDone = function(){
    const idElement = this.id;
    let index = -1;
    
    for(let i = 0; i < taskCount(); i++){
        const currentTaskCheckbox = currentTasks[i].querySelector(".todolist__checkbox-done").id;

        if(currentTaskCheckbox == idElement){
            index = i;
            break; 
        }
    }

    if(index > -1){
        if(this.checked){
            currentTasks[index].querySelector(".todolist__checkbox-done").checked = true;
        }
        else{
            currentTasks[index].querySelector(".todolist__checkbox-done").checked = false;
        }
    }

    chartRefresh();
}

const loadCheckboxEvent = function(){
    document.querySelectorAll(".todolist__checkbox-done").forEach(function(item){
        item.addEventListener("change", checkCheckboxDone);
    });
}

loadCheckboxEvent();