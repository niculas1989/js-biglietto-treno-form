/* 
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
BONUS:
replicare anche lo stile estetico fornito dallo screenshot tramite CSS
ATTENZIONE:
Controlliamo che tipo di valore viene restituito dai value degli input?
Evitiamo per il momento di utilizzare il tag <form> di HTML , poichè potrebbe giocarci qualche scherzetto inaspettato!
*/


// prendiamo le informazioni dall'utente, per poterle utilizzare su JS (ci serviranno poi per stampare in pagina le info sul biglietto)
const userInfo = document.getElementById('user-info');

// recuperiamo le informazioni sui KM che vuole percorrere
const kms = parseInt(document.getElementById('kms'));

// recuperiamo la sua età
const age = document.getElementById('age');

// colleghiamo il bottone "genera" con JS
const buttonGenerate = document.querySelector('.btn-primary');
// e subito dopo ci accertiamo che faccia qualcosa
buttonGenerate.addEventListener('click', function () {
    let ticketPrice = (kms * 0.21).toFixed(2);
    console.log(ticketPrice);

    // qui dovremmo calcolare SE (if) ci sono sconti particolari da effettuare. Capire come fare per collegare i vari step del select a questo passaggio.
})




// ! FORMULE SCONTO
/* 
const underEighteenPrice = (ticketPrice / 100) * 20;

const overSixtyFivePrice = (ticketPrice / 100) * 40;
*/
