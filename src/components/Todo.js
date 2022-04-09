import React, {useState} from 'react'
import {BsTrash, BsPen} from 'react-icons/bs'
import TodoForm from './TodoForm'

function Todo({todos, completeTodo, removeTodo, editTodo}) {
  
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitEdit = value => {
        editTodo(edit.id, value);
        setEdit({
            id: null,
            value:''
        })
    }

    if (edit.id){
        return <TodoForm edit={edit} onSubmit={submitEdit} />;
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <BsTrash onClick={() => removeTodo(todo.id)}
                className='delete-icon'/>
                <BsPen onClick={() => setEdit({id: todo.id, value: todo.text})} 
                className='edit-icon'/>
            </div>
        </div>
    ))
}

export default Todo