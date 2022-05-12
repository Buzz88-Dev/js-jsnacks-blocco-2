// genera un array di 10 numeri casuali range 1- 100, ma stavolta senza doppioni

let myArray = [];
console.log(myArray);

for (let i = 0; i < 10; i++){
    let numb = Math.floor(Math.random() * 100) + 1;

    while (myArray.includes(numb)) 
    { numb = Math.floor(Math.random() * 100) + 1; }

    myArray.push(numb);
}

console.log(myArray);




// metodo alternativo
let myArrayTwo = [];

while (myArrayTwo.length < 10) {

    let randomNum = Math.floor(Math.random() * 100) + 1;

    if (!myArrayTwo.includes(randomNum)){
        myArrayTwo.push(randomNum);
    }
}

console.log(myArrayTwo);




// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

let mioArray = [];
console.log(mioArray);

let somma = 0;

while (somma <= 50){

    let numero = parseInt(prompt("Dammi un numero da 1 a 10!!!"));
    mioArray.push(numero);
    somma += numero;
    console.log(numero);
}

if (somma > 50) {
    mioArray.pop();
}

console.log(mioArray);

