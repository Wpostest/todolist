const deleteTasksBtn = document.querySelector(".todolist__done");

const deleteTasks = () =>{
    const allTaskChecked = document.querySelectorAll(".todolist__task .todolist__checkbox-done:checked");
    
    if(allTaskChecked.length > 0){
        allTaskChecked.forEach((item) => {
            item.parentElement.remove();
        })

        chartRefresh();
    }
}

deleteTasksBtn.addEventListener("click", deleteTasks);

