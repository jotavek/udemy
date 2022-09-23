const fs = require('fs').promises;

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8' });
};


// flag: 'w'; ele apaga e escreve dnv
// flag: 'a'; ele faz um append, adiciona ao final do arquivo