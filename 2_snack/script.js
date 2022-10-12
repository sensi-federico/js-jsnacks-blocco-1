// Snack 2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga. (modificato) 

const wordOne = prompt('Inserisci una parola');
const wordTwo = prompt('Inserisci una parola');

if (wordOne.length > wordTwo.length) {
    console.log(wordTwo, wordOne);
} else if (wordOne.length < wordTwo.length){
    console.log(wordOne, wordTwo);
}
