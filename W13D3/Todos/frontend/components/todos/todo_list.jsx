import React from 'react';
import TodoListItem from './todo_list_item';


export default (() => <div>
    <h3>Todo List goes here!</h3>
    <ul>
        <TodoListItem prop={store}/>
    </ul>
</div>)