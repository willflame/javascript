// Carrega as referencias do html
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// Verifica se já existe uma lista salva no localStorage
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

/**
 * Função que renderiza as tarefas na pagina
 */
function renderTodos(){
  listElement.innerHTML = '';

  for(let todo of todos){
    // Cria os elementos que serão renderizados na tela
    let todoElement = document.createElement('li');
    let linkElement = document.createElement('a');
    let todoText = document.createTextNode(todo);

    // Seta o valor padrão para link criado
    linkElement.setAttribute('href', '#');

    // Adiciona chamada a função que ira excluir a tarefa da lista
    let pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    // Adiciona texto para o link que excluira a tarefa
    let linkText = document.createTextNode('Excluir');
    linkElement.appendChild(linkText);

    // Junta os elementos para um item da lista
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    // Insere a tarefa na lista renderizada
    listElement.appendChild(todoElement);
  }
}

// Chama a função sempre que iniciar o aplicativo para verificar tarefas
renderTodos();

/**
 * Adiciona uma tarefa a lista
 */
function addTodo(){
  let todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
  saveToStorage();
}

// Adiciona a chamada a função de adicionar tarefa ao botão Adicionar
buttonElement.onclick = addTodo;

/**
 * Remove uma tarefa da lista
 * @param index Posição da tarefa no array
 */
function deleteTodo(index){
  todos.splice(index, 1);
  renderTodos();
  saveToStorage();
}

/**
 * Salavar as tarefas n localStorage
 */
function saveToStorage(){
  localStorage.setItem('list_todos', JSON.stringify(todos));
}