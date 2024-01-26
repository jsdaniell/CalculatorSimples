const buttonHistory = document.querySelector('#buttonThemeHistoric');
const historicDiv = document.querySelector('#historicDiv');

buttonHistory.addEventListener('click', (e) => {

    
    if(result.style.display === "none"){
        result.style.display = "flex";
        historicDiv.style.display = "none";
    } else {
        result.style.display = "none";
        historicDiv.style.display = "flex";
    }

})
