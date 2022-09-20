/* 
Promise.all:
Te entrega uma promessa só com os valores dentro de um array.

Promise.race:
A primeira promessa que for resolvida voce entrega o valor e finaliza, como se fosse uma corrida mesmo

Promise.resolve:
Entrega um promise resolvido

Promise.reject:
Rejeita um promise
*/



function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') return reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);

    });
};

const promises = [
    /* 'Primeiro Valor', */
    esperaAi('Promise1', rand(1, 5)),
    esperaAi('Promise2', rand(1, 5)),
    esperaAi('Promise3', rand(1, 5)),
    /* esperaAi(1000, 1000), */
    /* 'Outro valor' */
];

Promise.race(promises).then((valor)=>console.log(valor)).catch((e) => console.log(e));
