console.log('JS OK');
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
// userInfoValue per il bottone

// recuperiamo le informazioni sui KM che vuole percorrere
const kms = document.getElementById('kms');

// recuperiamo la sua età
const age = document.getElementById('age');
// ageValue per il bottone

// recuperiamo il nome passeggero(l'elemento)
const name = document.getElementById('name');

// recuperiamo il costo del biglietto (l'elemento)
const price = document.getElementById('price');

// recuperiamo il valore "minorenne" dalla pagina
const minorenne = document.querySelector('.minorenne');

// recuperiamo il valore "over" dalla pagina
const over = document.querySelector('.over65');

// recuperiamo il valore "carrozza" dalla pagina
const carrozza = document.querySelector('#carrozza');

// recuperiamo il valore "code" dalla pagina
const code = document.querySelector('#code');





// colleghiamo il bottone "genera" con JS
const buttonGenerate = document.querySelector('.btn-primary');
// e subito dopo ci accertiamo che faccia qualcosa
buttonGenerate.addEventListener('click', function () {
    const kmsValue = parseInt(kms.value);
    console.log(kmsValue);
    let ticketPrice = (kmsValue * 0.21).toFixed(2);
    console.log(ticketPrice);

    const userInfoValue = userInfo.value;
    name.innerText = userInfoValue;

    const casualCarrozzaNumber = Math.floor((Math.random()) * 15);
    carrozza.innerText = casualCarrozzaNumber;

    const casualCodeNumber = Math.floor((Math.random()) * 1000);
    code.innerText = casualCodeNumber;


    // qui dovremmo calcolare SE (if) ci sono sconti particolari da effettuare. Capire come fare per collegare i vari step del select a questo passaggio.
    // const ageValue = age.value;
    // // console.log(ageValue);
    const minorenneValue = minorenne.value;
    const overValue = over.value;

    if (age.value === minorenneValue) {
        const underEighteenPrice = (ticketPrice / 100) * 20;
        console.log(underEighteenPrice);
        let ticketPriceSale = (ticketPrice - underEighteenPrice).toFixed(2);
        console.log(ticketPriceSale);
        price.innerText = ticketPriceSale;
    } else if (age.value === overValue) {
        const overSixtyFivePrice = (ticketPrice / 100) * 40;
        console.log(overSixtyFivePrice);
        let ticketPriceSale = (ticketPrice - overSixtyFivePrice).toFixed(2);
        console.log(ticketPriceSale);
        price.innerText = ticketPriceSale;
    } else {
        price.innerText = ticketPrice;
    }
})


/*
if (minorenne) {
    const underEighteenPrice = (ticketPrice / 100) * 20;
    console.log(underEighteenPrice);
    let ticketPriceSale = (ticketPrice - underEighteenPrice).toFixed(2);
    console.log(ticketPriceSale);
    price.innerText = ticketPriceSale;
} else if (over) {
    const overSixtyFivePrice = (ticketPrice / 100) * 40;
    console.log(overSixtyFivePrice);
    let ticketPriceSale = (ticketPrice - overSixtyFivePrice).toFixed(2);
    console.log(ticketPriceSale);
    price.innerText = ticketPriceSale;
} else {
    price.innerText = ticketPrice;
}
*/





// ! FORMULE SCONTO
/* 
const underEighteenPrice = (ticketPrice / 100) * 20;

const overSixtyFivePrice = (ticketPrice / 100) * 40;
*/
