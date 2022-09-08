// Filter, filtrar um array.
// Ele sempre vai retornar um array, com a mesma quantidade de elementos ou menos.

const pessoas = [
    { nome : 'Luiz' , idade: 62},
    { nome : 'Maria' , idade: 23},
    { nome : 'Eduardo' , idade: 55},
    { nome : 'Letícia' , idade: 19},
    { nome : 'Rosana' , idade: 32},
    { nome : 'Wallace' , idade: 47}
]

const PessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 7);
const maisDe50 = pessoas.filter(valor => valor.idade >= 50);
const terminaComA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a')) // (string termina com)
//console.log(PessoasComNomeGrande);
//console.log(maisDe50);
console.log(terminaComA)