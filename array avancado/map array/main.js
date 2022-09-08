// Map ele sempre vai retornar um array, com a mesma quantidade de elementos que o array original



//Dobrando os valores de numeros []
// const numeros = [5, 50 , 30 , 10, 23, 16, 6, 84, 11];
// const numerosEmDobro = numeros.map(num => num * 2)
// console.log(numerosEmDobro);

//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto
const pessoas = [
    { nome : 'Luiz' , idade: 62},
    { nome : 'Maria' , idade: 23},
    { nome : 'Eduardo' , idade: 55},
    { nome : 'Letícia' , idade: 19},
    { nome : 'Rosana' , idade: 32},
    { nome : 'Wallace' , idade: 47}
]

const onlyString = pessoas.map(obj => obj.nome);

console.log(onlyString)
const removeObjNome = pessoas.map(obj => ({idade : obj.idade}));
console.log(removeObjNome)

const comIds = pessoas.map(function(obj, indice){
    obj.id = indice + 1;
    return obj;
})

console.log(comIds);