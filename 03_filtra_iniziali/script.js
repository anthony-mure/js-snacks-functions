/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

//crare una funzione con 2 parametri
//ciclo l'array = prendo l'iniziale di ogni parola e la devo confrontare con il paramentro lettera
// se la parola ha il parametro lettera metto la parola in un nuovo array

let firstLetter = "A";
let newArrayNames = [];

function newNames (names,firstLetter){

   for(let i = 0; i < names.length ;i++ ){
     letterNames = names[i].charAt(0);

     if(letterNames === firstLetter){
        newArrayNames.push(names[i]);
     }
   }
   return newArrayNames;

}

// Invoca la funzione qui e stampa il risultato in console

console.log(newNames(names,firstLetter));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]