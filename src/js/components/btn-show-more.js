const btnShowMore = document.querySelector('.todolist__show-more');
const todolistPanel = document.querySelector('.todolist');


const showMore = () =>{
    btnShowMore.toggleAttribute("isShowing");
    if(btnShowMore.hasAttribute("isShowing") == true){
        todolistPanel.style.maxHeight = "100%";
        btnShowMore.textContent = "pokaz mniej";
        //document.body.style.height = "100%";
    }
    else{
        todolistPanel.style.maxHeight = "455px";
        btnShowMore.textContent = "pokaz wiecej";
        //document.body.style.height = "100vh";
    }
    
    
}

btnShowMore.addEventListener('click', showMore);