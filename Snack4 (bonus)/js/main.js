// TRACCIA
// Fai inserire un numero all'utente. Poi continua a chiedere numeri finché la serie è crescente (l'ultimo numero inserito deve essere maggiore del precedente). Alla fine stampali tutti.

// SVOLGIMENTO
let listEl = document.getElementById("list");
// Chiedi numero all'utente
let number = parseInt(prompt("Inserisci un numero"));
// Chiedi secondo numero all'utente
let nextNumber = parseInt(prompt("Inserisci un numero"));
// Salva il primo numero in un array nel quale aggiungi numeri successivi
let numbers = [number];
// Calcola ultimo numero array
let lastNumbers = numbers[numbers.length - 1];
// FINCHE' ultimo numero chiesto è maggiore dell'ultimo numero dell'array
while (nextNumber > lastNumbers) {
    // Aggiungi il nuovo numero all'array
    numbers.push(nextNumber);
    // Aggiorna l'ultimo numero dell'array
    lastNumbers = numbers[numbers.length - 1];
    // Chiedi numero successivo
    nextNumber = parseInt(prompt("Inserisci un numero"));
}
let listItemEl = document.createElement("li");
listItemEl.innerHTML = numbers;
listEl.append(listItemEl);