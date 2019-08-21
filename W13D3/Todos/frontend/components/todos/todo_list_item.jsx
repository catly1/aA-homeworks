import React from 'react';
import { allTodos } from '../../reducers/selectors';

class TodoListItem extends React.Component {
    constructor(props){
        super(props)
        this.todos = allTodos(props.prop.getState())
        // debugger
    }

    render(){
        const todosLis = this.todos.map((todo) => {
            return <li key={todo.id}> {todo.title} </li>
        })
        return <ul>
            {todosLis}
        </ul>
    }
}

export default TodoListItem