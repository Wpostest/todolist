const chart = document.querySelector('.todolist__line-done-percentage');
const taskDoneNumerDisplay = document.querySelector('.todolist__count-done-task'); 
const allTaskNumberDisplay = document.querySelector('.todolist__count-all-task');

const chartRefresh = () => {
    const task = taskCount();
    const taskDone = taskDoneCount();
    const taskDonePercentage =  taskDone / task * 100;
    taskDoneNumerDisplay.textContent = taskDone;
    allTaskNumberDisplay.textContent = task;

    if(taskCount <= 0){
        chart.style.background = `linear-gradient(to right, #68d391 0%, #68d391 0%, #dadada 0%, #dadada 100%)`;
    }
    else{
        chart.style.background = `linear-gradient(to right, #68d391 0%, #68d391 ${taskDonePercentage}%, #dadada ${taskDonePercentage}%, #dadada 100%)`;
    }
    
};

chartRefresh();