// Snack 2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga. (modificato) 

const wordOne = prompt('Inserisci una parola');
const wordTwo = prompt('Inserisci una parola');
const corta = document.getElementById('corta');
const lunga = document.getElementById('lunga');

if (wordOne.length > wordTwo.length) {
    console.log(wordTwo, wordOne);
    corta.innerHTML = wordTwo;
    lunga.innerHTML = wordOne;
} else if (wordOne.length < wordTwo.length){
    console.log(wordOne, wordTwo);
    corta.innerHTML = wordOne;
    lunga.innerHTML = wordTwo;
}
