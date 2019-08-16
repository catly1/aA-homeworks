const Todo = {
    checkToDo(){
        const checkBoxes = Array.from(document.getElementsByClassName("checkbox"));
        const checkbox = document.getElementsByClassName("todos")[0];
        checkbox.addEventListener("change", e => {
            let todosArr = JSON.parse(window.localStorage.getItem("arr"));
            let el = {
                name: e.target.parentNode.innerText,
                done: true
            }
            for (let i = 0; i < todosArr.length; i++) {
                if (todosArr[i].name === el.name) {
                    todosArr[i].done = true;
                    break;
                }
            }
            window.localStorage.setItem("arr", JSON.stringify(todosArr));
        });
    },
    addTodo(){
        const button = document.getElementsByClassName("add-todo-form")[0];
        button.addEventListener("submit", e => {
            e.preventDefault();
            todosArr = this.ensureTodosArr();
            myStorage = window.localStorage;
            const nameInputEl = document.getElementById("add-todo-input");
            const name = nameInputEl.value;
            const todos = document.getElementsByClassName("todos")[0]
            let todoData = {
                name: name,
                done: false
            }
            todosArr.push(todoData);
            myStorage.setItem("arr", JSON.stringify(todosArr));
            todo = this.createListItem(name, false)
            todos.appendChild(todo);
        });
    },
    createListItem(name, done){
        const todo = document.createElement("li");
        const input = document.createElement("input");
        input.classList.add = ("checkbox")
        const label = document.createElement("label");
        label.innerHTML = name;
        input.setAttribute("type", "checkbox");
        if(done)
            input.setAttribute("checked", "true");
        todo.appendChild(input);
        todo.appendChild(label);
        return todo;
    },
    ensureTodosArr(){
        let todosArr = JSON.parse(window.localStorage.getItem("arr"));
        if (todosArr === null) {
            window.localStorage.setItem("arr", JSON.stringify([]));
            todosArr = [];
        }
        return todosArr;
    },
    refresh(){
        todosArr = this.ensureTodosArr();
        const todos = document.getElementsByClassName("todos")[0]
        todosArr.forEach(el => {
            todo = this.createListItem(el.name, el.done);
            todos.appendChild(todo);
        });
        
    }
}





module.exports = Todo;