const elementos = [
    {tag: 'p', texto : 'Qualquer coisa.'},
    {tag: 'div', texto : 'Texto 2.'},
    {tag : 'section', texto : 'Texto 3.'},
    {tag : 'footer', texto : 'Texto 4.'},
]

const container = document.querySelector('.container'); // Selecionou uma classe container do html.
const div = document.createElement('div');  //Cria um elemento, no caso foi uma div.

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i]; //Atribuição via desestruturação.
    let TagCriada = document.createElement(tag);
    TagCriada.innerHTML = texto;
    div.appendChild(TagCriada); //Adicionou um filho a div.
}

container.appendChild(div); //Adicionou o filho div no container.