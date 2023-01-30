// TRACCIA
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

// SVOLGIMENTO
// Chiedi all'utente un numero
let userNumber = parseInt(prompt("Scegli un numero"));

// Generiamo n. array tanti quant'è il numero scelto dall'utente
const nArray = [];
let i = 0;
while (i < userNumber) {
    // Dentro ogni array ci saranno altri array composti da 10 numeri
    let userArray = [];
    const userArrayLength = 10;

    let z = 0;
    while (z < userArrayLength) {
        // Ogni array sarà formato da 10 numeri casuali da 1 a 100
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        userArray.push(randomNumber);
        z++;
    }
    // Stampa array
    console.log(userArray);
    nArray.push(userArray);
    i++;
}