console.log("ToDo.js: Hello Mitch.");

let todos = [];

// -- my sample pre-code
todos.push("add Store- and Load-Mechanics for BrowserDB");


// -- functions
// --
function displayTodoList() {
    let todoListElement = document.getElementById("ToDoList");

    todoListElement.innerHTML = '';

    for (let todo of todos) {
        let listItem = document.createElement("li");
        listItem.textContent = todo;

        let removeBtn = document.createElement("button");
        removeBtn.style.marginLeft = "10px";
        removeBtn.textContent = "X";
        removeBtn.onclick = () => {
            removeTodo(todo);
        }

        listItem.appendChild(removeBtn);
        todoListElement.appendChild(listItem);
    }
}

function addTodo() {
    let newTodo = document.getElementById("todoInput").value;
    todos.push(newTodo);

    console.log(todos);

    displayTodoList();
}

function removeTodo(todo2remove) {
    let index = todos.indexOf(todo2remove);

    todos.splice(index, 1);

    displayTodoList();
}

// -- Execution
// --
displayTodoList();
