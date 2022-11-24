// Reduz o array pra um elemento só.
// Estrutura do reduce:
// Array.reduce(function(acumulador, valor, indice, array)) {
//      console.log(acumulador)
//    }, 0); A diferença para o map e filter é que ele recebe um acumulador e no final o valor do acumulador é exibido após o corpo da função
//Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor);

//console.log(numerosPares);



const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = num.reduce((ac, valor) =>{
    ac += valor;
    return ac;
}, 0);
console.log(total);