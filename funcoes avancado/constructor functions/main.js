// Função construtora -> objetos
// Função fábrica -> objetos
// Uma função construtora sempre começará com letra maiscula na function e pra chamar ela voce sempre precisará da palavra New
// A palavra new cria um novo objeto vazio, faz o this apontar pra esse objeto vazio e depois retorna pra variável (no caso p1)
// Esse tipo de função serve como molde para criar objetos

function Pessoa(nome, sobrenome) {
    //Atributos ou métodos privados (só funciona dentro da function e não pode ser chamada na notação p1.ID por exemplo)
    const ID = 123456;
    const metodoInterno = function(){
        
    };
    
    //Atributos ou métodos públicos.
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function(){
        console.log(this.nome + ': sou um método.')
    };
}

const p1 = new Pessoa('Joao', 'Victor');
p1.metodo();

