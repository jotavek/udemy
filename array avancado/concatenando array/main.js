//Concatenar, unir arrays.


const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const a3 = a1.concat(a2);
// console.log(a3);


//Outra maneira 
//...rest -> ... spread

const a3 = [...a1, ...a2]
console.log(a3);