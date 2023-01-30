// TRACCIA
// Chiedi all'utente un valore minimo ed un valore massimo. Genera un numero casuale all'interno del range fornito dall'utente.

// SVOLGIMENTO
// Chiedi all'utente un valore minimo
let userMinNumber = parseInt(prompt("Scegli un numero come range minimo"));

// Chiedi all'utente un valore massimo
let userMaxNumber = parseInt(prompt("Scegli un numero come range massimo"));


// Genera numero all'interno del range
let randomNumbers = Math.floor(Math.random() * 100) + 1;

if (randomNumbers <= userMaxNumber && randomNumbers >= userMinNumber) {
    console.log(randomNumbers);
} else {
    console.log(randomNumbers);
    console.log("Il numero generato non rientra nel range");
}