const dateDisplay = document.querySelector('.todolist__current-time');

function formatDate(date) {
    const dayNames = [
        "Poniedziałek", "Wtorek",
        "Środa", "Czwartek",
        "Piątek", "Sobota",
        "Niedziela"
    ];

    const monthNames = [
      "Stycznia", "Luty", "Marca",
      "Kwietnia", "Maja", "Czerwca", "Lipca",
      "Sierpnia", "Wrzesienia", "Października",
      "Listopada", "Grudnia"
    ];
  
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const dayIndex = date.getDay() - 1;
  
    return  dayNames[dayIndex] + " " + day + " " + monthNames[monthIndex];
}

dateDisplay.textContent = formatDate(new Date());

setInterval(function(){
    dateDisplay.textContent = formatDate(new Date());
}, 60000);

