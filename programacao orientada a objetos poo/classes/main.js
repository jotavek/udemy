//Estrutura de uma classe

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`)      // Esse método vai direto pro prototype do objeto.
    }
}

const p1 = new Pessoa('João', 'Victor');
console.log(p1);
p1.falar();