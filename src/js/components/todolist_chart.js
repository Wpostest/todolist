const chart = document.querySelector('.todolist__line-done-percentage');
const taskDoneNumerDisplay = document.querySelector('.todolist__count-done-task'); 
const allTaskNumberDisplay = document.querySelector('.todolist__count-all-task');

const chartRefresh = () => {
    const taskCount = document.querySelectorAll('.todolist__task').length;
    const taskDoneCount = document.querySelectorAll('.todolist__checkbox-done:checked').length;
    const taskDonePercentage =  taskDoneCount / taskCount * 100;
    taskDoneNumerDisplay.textContent = taskDoneCount;
    allTaskNumberDisplay.textContent = taskCount;
    chart.style.background = `linear-gradient(to right, #68d391 0%, #68d391 ${taskDonePercentage}%, #dadada ${taskDonePercentage}%, #dadada 100%)`;
};

chartRefresh();