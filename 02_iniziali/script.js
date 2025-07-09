/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

console.log(names);

// Dichiara la funzione qui.

let letterArray =[];

// uso un ciclo for per visualizzare ogni elemento presente nell'array
// dentro al ciclo recupero la 1 lettera di ogni elemento dell'array
//generare un nuovo array con le lettere iniziali 
// fuori dal ciclo usare return per restituire il nuovo arrey di iniziali

function newArray() {

for(let i=0 ;i < names.length ; i++){
 letter = names[i].charAt(0);
 letterArray.push(letter);
}

return letterArray;

}

// Invoca la funzione qui e stampa il risultato in console
 newArray();
console.log(newArray());

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]