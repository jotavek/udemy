// Toda função definida como function tem uma variável especial que se chama arguments que sustenta todos os argumentos enviados.
function funcao() {
    let total = 0
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7)  //Estes são os argumentos

function funcao2() {
    console.log(arguments);
}
funcao2(1, 2, 3, 4, 5);

//Criando valores padrões para os parâmetros da função
function soma(a = 1, b = 1){
    console.log(a + b);
}
soma(1); 

//Exemplo de rest operator.
function exemplo(comida1, comida2, ...comida3){
    console.log(comida1, comida2, comida3);
}
exemplo('esfiha', 'pizza', 'batatafrita', 'taco', 'burrito');