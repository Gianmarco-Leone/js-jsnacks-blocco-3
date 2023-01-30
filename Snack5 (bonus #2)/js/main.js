// TRACCIA
// Genera un numero a caso compreso tra 1 - 100. Chiedi all’utente un numero fino a quando non indovina quello generato casualmente.Ogni volta che l'utente inserisce un numero, digli se è maggiore o minore di quello generato. Alla fine stampa il numero di tentativi che ci sono voluti per indovinare il numero generato casualmente. 

// SVOLGIMENTO:
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let indovinato = false;
let userNumber;
let tentativi = 0;

while (indovinato == false) {
    userNumber = parseInt(prompt("Inserisci un numero"));
    if (userNumber > randomNumber) {
        console.log("Il numero che hai scelto è maggiore, inserisci un numero più piccolo");
        tentativi++;

    } else if (userNumber < randomNumber) {
        console.log("Il numero che hai scelto è minore, inserisci un numero piuù grande");
        tentativi++;

    } else {
        console.log("Hai indovinato.");
        tentativi++;
        indovinato = true;
    }
}

console.log("Per indovinare il numero ci sono voluti " + tentativi + " tentativi.");