// Snack 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti. 

let numbersArray = [];

for (let i = 0; i < 10; i++) {
    const numbers = prompt('inserisci un numero');
    numbersArray.push(numbers); 
}

const somma = Number(numbersArray[0]) + Number(numbersArray[1]) + Number(numbersArray[2]) + Number(numbersArray[3]) + Number(numbersArray[4]) + Number(numbersArray[5]) + Number(numbersArray[6]) + Number(numbersArray[7]) + Number(numbersArray[8]) + Number(numbersArray[9]);

console.log(numbersArray);
console.log(somma);