let myArray = [];
console.log(myArray);

for (let i = 0; i < 10; i++){
    let numb = Math.floor(Math.random() * 100) + 1;

    while (myArray.includes(numb)) 
    { numb = Math.floor(Math.random() * 100) + 1; }

    myArray.push(numb);
}

console.log(myArray);