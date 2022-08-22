// Boostrap ToolTip implementation
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
// ToolTip Configuration Done

const todoInput = document.getElementById('todoInput'); //input field
const todoButton = document.getElementById('todoButton'); // input button
const listItems = document.getElementById('listItems'); //ul

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
    <li class='text-output fs-3'> <span id='spanTxt'>${todoInput.value}</span> 
    <button class='input-btn btn btn-danger float-md-end' onclick="removeTodoItem(event)"><i class="bi bi-trash-fill"></i></button>
    <button class='input-btn btn btn-success float-md-end' onclick='completedTodoItem(event)'><i class="bi bi-check2"></i></button>
    </li>
    `
    
    listItems.innerHTML += todoList;
    todoInput.value = '';
});

function removeTodoItem(event) {
    event.preventDefault();
    let targetValue = event.target;
    targetValue.parentElement.remove();
    
};

function completedTodoItem(event) {
    event.preventDefault();
    let targetValue = event.target;
    let inputTxt = targetValue.parentElement.childNodes[0].nextSibling.innerText
    targetValue.parentElement.innerHTML = `${inputTxt} - Task Completed `;
};