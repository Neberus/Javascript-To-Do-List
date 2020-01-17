let board  = document.getElementById('board');
let buttonAdd = document.getElementById('add');
let inputAdd = document.getElementById('novaTarefa');
let listaTarefas = [];

if(localStorage.getItem('listaTarefas')){
    listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'))
}else {
 listaTarefas = [];
    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
}

mostrarNaTela(listaTarefas);


buttonAdd.onclick = function(){
    let valorDigitado = inputAdd.value;
    listaTarefas.push(valorDigitado);

    let tarefa = document.createElement('div');
    //<div>
    tarefa.setAttribute('class','tarefa');

    let titulo = document.createElement('div');
    titulo.setAttribute('class', 'col-md-8');
    titulo.textContent = valorDigitado;

    let buttonCheck = document.createElement('div');
    buttonCheck.setAttribute('class', 'col-md-4');

    let button = document.createElement('button');
    buttonCheck.setAttribute('class','btn btn-success')
    buttonCheck.textContent = "Check";
    
    tarefa.appendChild(titulo);
    tarefa.appendChild(buttonCheck);

    board.appendChild(tarefa);
    
    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));    
}

function mostrarNaTela(listaTarefas){
    for(let item of listaTarefas){
        gerarTarefa(item);
    }
}

function gerarTarefa(valorDigitado){
    let tarefa = document.createElement('div');

    tarefa.setAttribute('class','tarefa');
    // tarefa.setAttribute('posicao', posicao);

    let titulo = document.createElement('div');
    titulo.setAttribute('class', 'col-md-8');
    titulo.textContent = valorDigitado;

    let buttonCheck = document.createElement('div');
    buttonCheck.setAttribute('class', 'col-md-4');

    let button = document.createElement('button');
    buttonCheck.setAttribute('class','btn btn-success')
    buttonCheck.textContent = "Check";
    
    tarefa.appendChild(titulo);
    tarefa.appendChild(buttonCheck);

    board.appendChild(tarefa);

    buttonCheck.addEventListener('click', function(e) {
    board.removeChild(tarefa);

    
    var pos = listaTarefas.indexOf(valorDigitado);
    listaTarefas.splice(pos,1);
    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
});
}

