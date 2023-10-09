// ## Gioco dei dadi 

// - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// - Stabilire il vincitore, in base a chi fa il punteggio più alto.
let numeroRandomGiocatore  
let numeroRandomBanco
let risultatoGiocatore
let risultatoBanco 

btnLanciaDadi = document.getElementById("btn_lancia");

btnLanciaDadi.addEventListener("click", function () {

    numeroRandomGiocatore = Math.round(Math.random() * (6 - 1) + 1);
    console.log(numeroRandomGiocatore);
    
    numeroRandomBanco = Math.round(Math.random() * (6 - 1) + 1);
    console.log(numeroRandomBanco);

    if (numeroRandomGiocatore > numeroRandomBanco) {
        risultatoGiocatore = "Grande!!! Hai vinto!!!"
            console.log(risultatoGiocatore);
    } else if (numeroRandomGiocatore === numeroRandomBanco){
        risultatoGiocatore = "Pareggio... riproviamo!";
        // risultatoBanco = "Pareggio... riproviamo!"
        // console.log(risultatoGiocatore);  
    } else {
        risultatoGiocatore = "Hai perso! Peccatooooo... Riprova!!!"
        console.log(risultatoGiocatore); 
    }
       
    
        // risultatoBanco = "Hai vinto!";
        // console.log(risultatoGiocatore);

        numGiocatore = document.getElementById("num-giocatore");
        numBanco = document.getElementById("num-banco");
        messaggio = document.getElementById("messaggio")
        
        
        numGiocatore.innerHTML = numeroRandomGiocatore;
        numBanco.innerHTML = numeroRandomBanco;
        messaggio.innerHTML = risultatoGiocatore
  //console.log(valoreGiocatore);
                
})          