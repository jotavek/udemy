const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefas();
}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = []

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    
    const tarefasJSON = JSON.stringify(listaDeTarefas);  // Salvar os dados no navegador; JSON.stringify converte um elemento JS para string num formato JSON
    localStorage.setItem('tarefas', tarefasJSON); // tarefas vai ser o nome usado para recupera os dados novamente. OBS Só pode salvar string nesse local storage.
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas'); //Aqui eu pego as tarefas que estavam salvas no local storage através da palavra-chave 'tarefas'.
    const listaDeTarefas = JSON.parse(tarefas) //O método JSON.parse () analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string.
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    limpaInput();
});

function criaLi(){
    const li = document.createElement('li');
    return li;
    
}

// Atribui opções as teclas digitadas no inputTarefa, veja pelo console.
// 
// inputTarefa.addEventListener('keypress', function(e){ 
//     console.log(e);
// })

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
})

function limpaInput(){
    inputTarefa.value = ('');
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.classList.add('apagar');
    li.appendChild(botaoApagar)
    botaoApagar.setAttribute('class', 'apagar') // Seta um atributo e um valor.
    botaoApagar.setAttribute('title', 'Apagar esta tarefa') // Seta um atributo e um valor.

}

document.addEventListener('click', function(e){
    const el = e.target;
    if (el.classList.contains('apagar')){
        el.parentElement.remove(); // Remove o pai do elemento (el)
        salvarTarefas();

    }
})