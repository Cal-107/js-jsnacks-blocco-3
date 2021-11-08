// Snack 2
// A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
// Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]

// - Creo array di numeri
const listNum = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10];
console.log(listNum);

// - Creo un nuovo array con map con i numeri del primo array al quadrato

const newNumbersList = listNum.map( num => num * num); //<-- Versione abbreviata

// const newNumbersList = listNum.map( (num) => {  //<-- Versione più lunga
//     return num * num;
// });

console.log('Nuovo array con numeri al quadrato', newNumbersList);