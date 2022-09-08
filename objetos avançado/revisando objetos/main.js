// Um objeto é formado por um par (chave e valor)
// const pessoa = {
//     nome: 'Joao',
//     sobrenome: 'Victor'
// }
// nome e sobrenome são chaves, joao victor valores.
// pessoa é o objeto.
//
// Pra apagar uma chave de um objeto utilize o delete objeto.chave;
// Quando tem function dentro de uma CHAVE elas são chamadas de MÉTODOS.

const pessoa1 = {
    nome: 'Joao',
    sobrenome: 'Victor'
}

for (let chave in pessoa1){
    console.log(pessoa1[chave])
}