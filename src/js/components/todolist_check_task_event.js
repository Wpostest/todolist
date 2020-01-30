const checkboxes = [...document.querySelectorAll('.todolist__checkbox-done')];

const checboxChangeEvent = () =>{
    console.log("dziala")
    chartRefresh();
};

checkboxes.forEach(element => {
    element.addEventListener("change", checboxChangeEvent);
});
