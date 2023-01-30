// TRACCIA
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

// SVOLGIMENTO
// Chiedi all'utente un numero
let userNumber = parseInt(prompt("Scegli un numero"));
console.log(userNumber);

// Generiamo n. array tanti quant'è il numero scelto dall'utente
const nArray = [];

// Dentro ogni array ci saranno altri array composti da 10 numeri
let userArray = [];
const userArrayLength = 10;

let i = 0;
while (i < userNumber) {
    nArray.push(userArray);
    i++;
}

// Ogni array sarà formato da 10 numeri casuali da 1 a 100
i = 0;
while (i < userArrayLength) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    userArray.push(randomNumber);
    i++;
}
// Stampa array
console.log(userArray);
console.log(nArray);





