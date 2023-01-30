// TRACCIA
// Chiedi all'utente un valore minimo ed un valore massimo. Genera un numero casuale all'interno del range fornito dall'utente.

// SVOLGIMENTO
// Chiedi all'utente un valore minimo
let userMinNumber = parseInt(prompt("Scegli un numero come range minimo"));
// Chiedi all'utente un valore massimo
let userMaxNumber = parseInt(prompt("Scegli un numero come range massimo"));

let outputMessageEl = document.getElementById("output_message");
let messageText;

// Genera numero all'interno del range
let randomNumbers = Math.floor(Math.random() * 100) + 1;
if (randomNumbers <= userMaxNumber && randomNumbers >= userMinNumber) {
    messageText = randomNumbers;
} else {
    messageText = "Il numero generato non rientra nel range";
}
outputMessageEl.innerHTML = messageText;