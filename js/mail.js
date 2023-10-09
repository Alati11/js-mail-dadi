// ## Mail utente corretta

esitoValidazione = document.getElementById("text-message")

// - Chiedi all’utente la sua email
//     - creare un' array contenente una lista di le mail valide per l'accesso
const arrayMail = [
    'giuseppe@gmail.com',
    'alice@gmail.com',
    'alessandra@gmail.com',
    'ciccio@gmail.com'
]
console.log(arrayMail)

// - tramite comanbdo prompt chiedere all'utente di inserire la mail
let mailUser = prompt('Inserisci mail');

// - usare il ciclo for per confrontare la mail inserita con quelle esistenti
const lunghezzaArray = arrayMail.length
let massageUser 

// - Controlla che sia nella lista di chi pu
for (let i = 0; i < lunghezzaArray; i++){
    mailCurrent = arrayMail [i]
    console.log(i, mailCurrent); 
 
    if (mailUser == mailCurrent){
        messageUser = 'Mail corretta'
        console.log('Mail corretta');  
    } else {
        messageUser = 'Mail errata'
        console.log('Mail errata');
    }   
}
// - Stampa un messaggio appropriato sull’esito del controllo
//     - Se mail è corrispondente stampare: mail corretta.
//     - altrimenti stampare messaggio: mail errata. 
esitoValidazione.innerHTML = messageUser;


 
   
