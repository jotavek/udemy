// Object.keys retorna as chaves do objeto em um array.
// Object.freeze congela o objeto, nao dá pra alterar.
// Object.defineProperties define varias propriedades
// Object.defineProperty define uma propriedade
// Spread operator ...() possibilita copiar um objeto sem afetar o original.
// Object.assign(des, any) possibilita copiar um objeto sem afetar o original.
// Object.getOwnPropertyDescriptor(o , 'prop) retorna as propriedades do objeto
// Object.values() retorna os valores das chaves de um objeto.
// Object.entries() retorna as chaves e os valores de um objeto em um Array.

const produto = {nome: 'Camisa', preco: 30};
const copiaProduto = {...produto, Tamanho: '39 - 40 - 41 - 42'}; //Spread operator

copiaProduto.nome = 'Tenis';
copiaProduto.preco = '50';

//console.log(produto);
//console.log(copiaProduto);
// ------- Exemplo 2 --------
const produto2 = {nome: 'Camisa', preco: 30};
const copiaProduto2 =  Object.assign({}, produto2); // Object.assign 

copiaProduto2.nome = 'Tenis';
copiaProduto2.preco = '50';

//console.log(produto2);
//console.log(copiaProduto2);

const produto3 = {nome: 'Camisa', preco: 30};
for (let valor of Object.keys(produto3)){ // Object.keys mostra as chaves do objeto, neste caso iterei com for of
    console.log(valor);
};
console.log(Object.getOwnPropertyDescriptor(produto3, 'nome'));
console.log(Object.values(produto2));

for(let [chave, valor] of Object.entries(produto2)){ //Se quiser iterar com entries precisa fazer a descontrução do array
    console.log(chave, valor);
}
