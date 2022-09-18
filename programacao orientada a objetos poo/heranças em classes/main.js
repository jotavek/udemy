class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false;

    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já ligado`)
            return;
        }
        this.ligado = true;
    }
    desligado() {
        if (!this.ligado) {
            console.log(`${this.nome} já desligado`)
            return;
        }
        this.ligado = false;
    }

}

class Smartphone extends DispositivoEletronico {    // Smartphone está herdando do Dispositivo Eletronico
    constructor(nome, cor, modelo) {
        super(nome); // Esse super chama o construtor da classe pai e executar ele dentro dessa nova classe.
        this.cor = cor;
        this.modelo = modelo;
    }
}


//A classe smartphone herda da classe dispositivo eletronico.

const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
d1.desligado();
console.log(d1);

const s1 = new Smartphone('Samsung', 'Preto', 'S20');