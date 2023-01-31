// TRACCIA
// Chiedi all'utente un valore minimo ed un valore massimo. Genera un numero casuale all'interno del range fornito dall'utente.

// SVOLGIMENTO
let outputMessageEl = document.getElementById("output_message");
let messageText;
// Chiedi all'utente un valore minimo
let userMinNumber = parseInt(prompt("Scegli un numero come range minimo"));
// Chiedi all'utente un valore massimo
let userMaxNumber = parseInt(prompt("Scegli un numero come range massimo"));
// Genera numero all'interno del range
let randomNumbers = Math.floor(Math.random() * (userMaxNumber - userMinNumber) + 1) + userMinNumber;
messageText = randomNumbers;

outputMessageEl.innerHTML = messageText;