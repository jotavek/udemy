//IIFE Immediately invoked function expression
// Ela precisa estar envolvida com () para não tocar no escopo global
// Pra chamar a função precisa colocar () no final.

(function(idade, peso, altura){
    const sobrenome = 'Victor';
    function criaNome(criaNome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('João'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(20, 64, 1.63)