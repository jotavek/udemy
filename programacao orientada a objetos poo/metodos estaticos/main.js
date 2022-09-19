// os metodos estaticos nao tem acesso ao dados da instancia, this.tv e this.volume
// 


class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Métdo de instancia
    aumentarVolume() {
        this.volume += 2;
    }
    
    // Métdo de instancia

    diminuirVolume() {
        this.volume -= 2;
    }

    //Método estático 
    static trocaPilha(){
        console.log('Ok irei trocar a pilha.')
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();
controle1.aumentarVolume();
ControleRemoto.trocaPilha();     // Dessa forma chamamos um método estático.
console.log(controle1)