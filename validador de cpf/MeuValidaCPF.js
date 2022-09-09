// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237                  // Aqui foi aplicado o array.reduce na solução

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });

};

ValidaCPF.prototype.valido = function () {
    if (this.cpfLimpo.length !== 11) return false;
    if (this.cpfLimpo === 'undefined') return false;
    if (this.isSequencia()) return false;

    const cpfparcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfparcial);
    const digito2 = this.criaDigito(cpfparcial + digito1);
    const novoCpf = cpfparcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfparcial) {
    const cpfparcialarray = Array.from(cpfparcial)
    let regressivo = cpfparcialarray.length + 1;
    const total = cpfparcialarray.reduce(function (ac, val) {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0)
    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('070.987.720-03');
if (cpf.valido()) {
    console.log('Cpf válido');
} else {
    console.log('Cpf inválido');
}