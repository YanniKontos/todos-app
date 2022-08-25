// Boostrap ToolTip implementation
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
// ToolTip Configuration Done


const todoInput = document.getElementById('todoInput'); //input field
const todoButton = document.getElementById('todoButton'); // input button
const listItems = document.getElementById('listItems'); //ul

document.addEventListener('DOMContentLoaded', getTodos);

todoButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (todoInput.value === '') {
        todoInput.classList.add('is-invalid');
        return;
    }
    else {
        todoInput.classList.remove('is-invalid');
    }

    const todoList = `
    <li class='text-output fs-4' id='textOutput'> 
    <span id='spanTxt'>${todoInput.value}</span> 
    <button class='input-btn btn btn-success' onclick='completedTodoItem(event)'><i class="bi bi-check2"></i></button>
    <button class='input-btn btn btn-danger' onclick="removeTodoItem(event)"><i class="bi bi-trash-fill"></i></button>
    </li>
    `
    listItems.innerHTML += todoList;
    saveTodos(todoInput.value);
    todoInput.value = '';
});

function removeTodoItem(e) {
    e.preventDefault();
    let targetValue = e.target;
    const todo = targetValue.parentElement;
    targetValue.parentElement.remove();
    removeTodos(todoItem);
};


function completedTodoItem(e) {
    e.preventDefault();
    const completedTxt = '- Task Completed';
    let targetValue = e.target;
    let finalTxt = targetValue.parentElement.childNodes[1];
    let removeSuccessButton = targetValue.parentElement.childNodes[3];
    finalTxt.innerHTML += completedTxt;
    finalTxt.classList.add('final-txt');
    removeSuccessButton = removeSuccessButton.remove();
};

function saveTodos(todoItem) {
    let todos;

    if(localStorage.getItem('todos') === null) {
        todos = [];
    }

    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todoItem);
    localStorage.setItem('todos', JSON.stringify(todos));
};

function getTodos() {
    let todos;

    if(localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach((todoItem) => {
    const todoList = `
        <li class='text-output fs-4' id='textOutput'> 
        <span id='spanTxt'>${todoItem}</span> 
        <button class='input-btn btn btn-success' onclick='completedTodoItem(event)'><i class="bi bi-check2"></i></button>
        <button class='input-btn btn btn-danger' onclick="removeTodoItem(event)"><i class="bi bi-trash-fill"></i></button>
        </li>
    `
    listItems.innerHTML += todoList;
    });
};

function removeTodos(todoItem) {
    let todos;

    if(localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    const todoIndex = todoItem.children[0].innerText;
    todos.splice(todoIndex, 1);
    localStorage.setItem('todos', JSON.stringify(todos)); 
};