

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// let login;

// for (let i = 0; i < emailAddress.length; i++) {
//     const email = emailAddress[i];

//     if (userEmail === email) {
//         login = true;
//     }
// }


const nameArray = [
    'Marco',
    'Paolo',
    'John',
    'Trevor',
    'Frankie'
];
 

let i = 0;
const name = prompt('inserisci il tuo nome');

while (i < nameArray.length) {

    const nameList = nameArray[i];

    if (name === nameList){
        console.log('Puoi accedere');
    } else {
        console.log('non puoi accedere');
    }

    i++
}

