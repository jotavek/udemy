// defineProperty - defineProperties


function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque

    Object.defineProperty(this, 'estoque', {  // Qual objeto quero mexer? this. Qual propriedade? 'estoque'
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: false // configurável (nao pode reconfigurar nem apagar a chave)
    });

    Object.defineProperties(this, {  // Uso do Object.defineProperties
        nome: {

        },
        preco: {

        },
    });
}

const p1 = new Produto('Camisa', 20, 3);
console.log(p1)