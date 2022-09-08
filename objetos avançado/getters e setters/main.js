// Getters e Setters
// Getter = pega o valor
// Setter = seta o valor


function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {  // Qual objeto quero mexer? this. Qual propriedade? 'estoque'
        enumerable: true, // mostra a chave
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                console.log('Bad value');
                return;
            }
            estoquePrivado = valor
        },
        configurable: false // configurável (nao pode reconfigurar nem apagar a chave)
    });
}

const p1 = new Produto('Camisa', 20, 3);
p1.estoque = 53;
console.log(p1.estoque);