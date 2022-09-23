const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=> {
    res.send(`<form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar Formulário</button>
    </form>`);
});
//                          Esse ponto de interrogação significa que o idUsuarios pode ou nao ser recebido
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    res.send(req.params.idUsuarios);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Recebi o formulário');
});

app.listen(3000, () => {
    console.log('Servidor http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});