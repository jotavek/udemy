/* Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servido de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora 
que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro
no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// New Object -> Object.prototype
const objA = {
    chaveA: 'A'
};
const objB = {
    chaveA: 'B'
};

Object.setPrototypeOf(objB, objA); // Setei o protótipo de B o mesmo do protótipo de A, entao consigo acessar tudo de A por causa da cadeia
//console.log(objB.chaveA);


function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

const p1 = new Produto('Camisa', 50)
const p2 = new Produto('Tenis', 100)
p1.desconto(10);
p2.desconto(10);
console.log(p1, p2)