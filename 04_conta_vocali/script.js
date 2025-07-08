/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.

//creare una funzione con parametro word 
//creare una variabile con le vocali
//creare una variabile per contare le vocali 
//creare una variabile per mettere le vocali trovate
//ciclo con for la variabile word per trovare :il numero di vocali contenute e le vocali stesse

function vocalWord(word){
  const vocals = "aeiou";
  let numberVocals = 0;
  let vocalsFound = " ";

  for(let i = 0; i < word.length; i++){
    if(vocals.includes(word[i])){

      numberVocals++;
      vocalsFound += word[i];
    }
  }
    return (`${ numberVocals} ${vocalsFound} `);

}

// Invoca la funzione qui e stampa il risultato in console
 vocalWord(word);
 console.log(vocalWord(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)