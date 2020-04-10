const input = document.querySelector(".todolist__search");

const searchingTask = function(event){
    const inputText = this.value.toLowerCase();
    const inputTextLength = this.value.length;
    console.log(inputTextLength);
    let filtredTasks = currentTasks;
    let taskTextHtml = "";

    if(currentTasks.length > 0){
        filtredTasks = filtredTasks.filter(function(item){ 
            const taskTextElement = item.querySelector(".todolist__task-text");
            return taskTextElement.textContent.toLowerCase().includes(inputText);
        });

        filtredTasks.forEach(function(item){
            const taskTextElement = item.querySelector(".todolist__task-text");
            const taskText = taskTextElement.textContent;
            const taskTextLength = taskTextElement.textContent.length;

            for(let i = 0; i < taskTextLength; i++){
                if(taskText.substring(i, i + inputTextLength).toLowerCase() == inputText &&  inputTextLength > 0){
                    taskTextHtml += "<span>" + taskText.substring(i, i + inputTextLength) + "</span>";
                    i += inputTextLength - 1;
                }
                else{
                    taskTextHtml += taskText[i];
                }
            }

            taskTextHtml += "\n";
        })

        console.log(taskTextHtml);
    }
}

input.addEventListener("input", searchingTask);