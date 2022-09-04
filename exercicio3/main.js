/* Escreva uma função que recebe um número e retorne o seguinte:
Numero é divisivel por 3 = Fizz
Numero é divisivel por 5 = Buzz
Numero é divisivel por 3 e 5 = FizzBuzz
Numero NÃO é divisivel por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número = Retorna o próprio número
Use a função com números de 0 a 100. */

function numero(num){
    if (num % 3 === 0 & num % 5 === 0){
        return 'FizzBuzz (Numero divisivel por 3 e 5).'
    }if (num % 3 === 0){
        return ('Fizz (número divisivel por 3).')
    } if (num % 5 === 0){
        return ('Buzz (número divisivel por 5).')
    } if (num % 3 != 0 & num % 5 != 0){
            return(num);
    } if (isNaN(num)){
        return (`${num} é um número.`);
    }
            
        
    
}

for (let i = 0; i <= 100; i++){
    console.log(i, numero(i));
}