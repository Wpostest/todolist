const btnDone = document.querySelector('.todolist__done');
const bicepsRight = document.querySelector('.todolist__done-right-biceps');
const bicepsLeft = document.querySelector('.todolist__done-left-biceps');

const mouseOverAnimation = (e) =>{
    bicepsRight.classList.add('biceps-right-over');
    bicepsLeft.classList.add('biceps-left-over');
    bicepsRight.classList.remove('biceps-right-out');
    bicepsLeft.classList.remove('biceps-left-out');
}

const mouseOutAnimation = (e) =>{
    bicepsRight.classList.remove('biceps-right-over');
    bicepsLeft.classList.remove('biceps-left-over');
    bicepsRight.classList.add('biceps-right-out');
    bicepsLeft.classList.add('biceps-left-out');
}

btnDone.addEventListener('mouseover', mouseOverAnimation);
btnDone.addEventListener('mouseout', mouseOutAnimation);