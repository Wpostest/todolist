const input = document.querySelector(".todolist__search");

const searchingTask = function(event){
    const inputText = this.value.toLowerCase();
    const inputTextLength = this.value.length;

    if(this.value == ""){
        return reloadTasks();
    }

    if(currentTasks.length > 0){
        while(todolist.lastElementChild instanceof HTMLLIElement){
            todolist.removeChild(todolist.lastElementChild);
        }

        let filtredTasks = currentTasks.map(function(item){
            return item.cloneNode(true);
        });

        filtredTasks = filtredTasks.filter(function(item){ 
            const taskTextElement = item.querySelector(".todolist__task-text");
            return taskTextElement.textContent.toLowerCase().includes(inputText);
        });

        if(filtredTasks.length > 0){
            filtredTasks.forEach(function(item){
                const taskTextElement = item.querySelector(".todolist__task-text");
                const taskText = taskTextElement.textContent;
                const taskTextLength = taskTextElement.textContent.length;
                let taskTextHtml = "";
    
                for(let i = 0; i < taskTextLength; i++){
                    if(taskText.substring(i, i + inputTextLength).toLowerCase() == inputText &&  inputTextLength > 0){
                        taskTextHtml += "<span class='text-active'>" + taskText.substring(i, i + inputTextLength) + "</span>";
                        i += inputTextLength - 1;
                    }
                    else{
                        taskTextHtml += taskText[i];
                    }
                }

                taskTextElement.innerHTML = taskTextHtml;
                todolist.appendChild(item);
            });
        }

        loadCheckboxEvent();
    }
}

input.addEventListener("input", searchingTask);

input.addEventListener("keydown", function(e){
    if(e.keyCode == 13){
        e.preventDefault();
        e.stopPropagation();
    }
});

