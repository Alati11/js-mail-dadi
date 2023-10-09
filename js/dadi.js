// ## Gioco dei dadi 

// - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// - Stabilire il vincitore, in base a chi fa il punteggio più alto.


btnLanciaDadi = document.getElementById("btn_lancia");

btnLanciaDadi.addEventListener("click", function () {

    numeroRandomGiocatore = Math.round(Math.random() * (6 - 1) + 1);
    //console.log(numeroRandomGiocatore);
    
    numeroRandomBanco = Math.round(Math.random() * (6 - 1) + 1);
    //console.log(numeroRandomBanco);
