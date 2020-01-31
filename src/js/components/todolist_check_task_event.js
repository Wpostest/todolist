const checkboxes = [...document.querySelectorAll('.todolist__checkbox-done')];

const checboxChangeEvent = () =>{
    chartRefresh();
};

checkboxes.forEach(element => {
    element.addEventListener("change", checboxChangeEvent);
});
