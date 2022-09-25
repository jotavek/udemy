const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'src', 'views') );

app.use(routes);


app.listen(3000, () => {
    console.log('Servidor http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});