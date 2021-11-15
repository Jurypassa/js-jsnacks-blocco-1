// **********JSnack 1********


// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while


// *******CON FOR

// let somma = 0;

// for (let i = 0; i < 5; i++){
//     const numeri = parseInt(prompt("Inserisci un numero"));

//     somma = numeri + somma;
//     console.log(somma);
// }


// *******CON WHILE


// let somma = 0;

// let i = 0;

// while (i < 5){
//     const numeri = parseInt(prompt("Inserisci un numero"));

//     somma = numeri + somma;
//     console.log(somma);

//     i++
// }



// *********JSnack 2


// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// const parola1 = prompt("Inserisci prima parola");
// const parola2 = prompt("Inserisci seconda parola");

// if(parola1.length > parola2.length){
//     alert(parola1);
// }else if(parola1.length < parola2.length){
//     alert(parola2);
// }else{
//     alert(parola1 + parola2);
// }
   
   
   
// ********JSnack 3



// Stampa le potenze di 2 fino a 1000.   
   
let prodotto = 1;

for (let i = 0; i < 9; i++){

  prodotto = prodotto * 2;
  console.log(prodotto);
}
   