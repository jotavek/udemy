/* Vc cria uma promisse usando o construtor da promisse, vc vai receber 2 parametros na promisse, nao necessariamente precisa ser resolve e reject mas e bom.
todo resolve vai cair no then then..
 se der um reject vai direto pro catch

é como se fosse um if e else
resolve é um if 
reject catch  */

function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com Base de Dados', rand(1, 3)).then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da base', rand(1-3));
}).then(resposta => {
    console.log(resposta);
    return esperaAi('Tratando os dados da base', rand(1,3));
}).then(() => {
    console.log('Exibe dados na tela');
});

console.log('Isso aqui será exibido antes de qualquer outro promisse.');