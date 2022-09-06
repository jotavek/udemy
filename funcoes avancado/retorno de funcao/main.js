
function criaDivisao(divisor){
    return function (num){
        return (num / divisor);
    }
};

const div2 = criaDivisao(2);
const div3 = criaDivisao(3);
const div4 = criaDivisao(4);

//console.log(div4(20));


function criaSoma(soma){
    return function (num){
        return (num + soma);
    }
}

const soma1 = criaSoma(1);
const soma2 = criaSoma(2);
const soma3 = criaSoma(3);

console.log(soma3(33));
