// const nome = 'Joao';
// const sobrenome = 'Victor'

// const falaNome = () => nome + ' ' + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar'

// // console.log(exports);


class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;


// Podemos exportar utilizando exports.Pessoa
// Ou module.exports
// Ou this.sobrenome 
