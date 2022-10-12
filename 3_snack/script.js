// Snack 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti. 

let numbersArray = [];

for (let i = 0; i < 10; i++) {
    const numbers = prompt('inserisci un numero');
    numbersArray.push(numbers); 
}


console.log(numbersArray);