//Snack 1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore. (modificato) 

const numberOne = prompt('Inserisci primo numero');
const numberTwo = prompt('Inserisci Secondo numero');
const maggiore = document.getElementById('maggiore');

if (numberOne < numberTwo) {
    console.log(numberTwo);

} else if (numberOne > numberTwo) {
    console.log(numberOne);

} else {
    console.log('I numeri sono uguali');

}



