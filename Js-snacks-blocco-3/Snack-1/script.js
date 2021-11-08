// Snack 1
// 1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
// - Codice giocatore
// - Nome
// - Cognome
// - Età
// - Media punti fatti per partita
// - Percentuale di successo per tiri da 3 punti
// 2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
// - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
// - la media punti fatti per partita deve essere compresa tra 0 e 50
// - la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
// 3. Stampare Nome, cognome, età e codice giocatore.
// 4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
// 5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.

// 1 - Creo un oggeto per un singolo giocatore con relative proprietà
// - codice giocatore, percentuale punti per partita e successo tiri da 3 li definiamo tramite funzioni
const playerCard = [
    {
        persId: setId() + getRandNumInt(100, 999),
        firstName: 'Michael',
        lastName: 'Jordan',
        age: 28,
        pointForMatch: getRandNumInt(0, 50),
        percSucc3Points: parseFloat(getRandNumPerc(0, 100).toFixed(1)),
    }
];
console.table(playerCard);












// 2 - Creo funzioni

/**
* 
* Functions
* 
**/

// Generatore codice giocatore
function setId () {
    let codeId = '';
    let chars = 'ABCDEFGHILMNOPQRSTUVZ';
    for (let i = 0; i < 3; i++) {
        chars[Math.floor(Math.random () * chars.length)];
        codeId += chars[Math.floor(Math.random () * chars.length)];
    }
    return codeId
} 

// Gen  Numero random intero
function getRandNumInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Gen Numero random per percentuale
function getRandNumPerc(min, max) {
    return Math.random() * (max - min + 1) + min;
}