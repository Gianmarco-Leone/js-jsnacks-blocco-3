// TRACCIA
// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

// SVOLGIMENTO
// Crea array vuoto
const numbers = [];
let outputMessage = document.getElementById("output_message");

let somma = 0;
// FINCHE' la somma degli elementi è minore di 50
while (somma < 50) {
    // Chiedi all'utente numero da inserire nell'array
    let userNumber = parseInt(prompt("Scegli un numero"));
    somma += userNumber;
    // Inserisci numero nell'array iniziale
    numbers.push(userNumber);
}

outputMessage.innerHTML = numbers;