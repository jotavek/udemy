//For in -> Lê os índices(array ou vetor) ou chaves do objeto.

//const frutas = ['Pera' , 'Maçã', 'Uva', 'Abacaxi', 'Morango'];
//fLen = frutas.length
//for (let index = 0; index < fLen; index++){
//  console.log(frutas[index]);
//}

//for (let i in frutas){
 //   console.log(frutas[i]);
//}


const pessoa = {
    nome: 'João',
    sobrenome: 'Victor',
    idade: 20
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}