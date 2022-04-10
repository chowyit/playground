import React, {useState} from 'react'
import {BsTrash, BsPen} from 'react-icons/bs'
import {useDispatch} from 'react-redux';
import {deleteTodo, toggleComplete, addTodos, updateTodo} from '../redux/reducer';
import TodoForm from './TodoForm';

function Todo({todos}) {
  
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const dispatch = useDispatch();

    const handleCompleteClick = (currentId, currentIsCompleted) => {
        dispatch(
            toggleComplete(
                { id: currentId, isCompleted: !currentIsCompleted}
            )
        );
    }

    const handleDeleteClick = (currentId) => {
        dispatch(deleteTodo({id: currentId}))
    }

    // const submitUpdate = () => {
    //     dispatch(updateTodo({
    //         id: edit.id,
    //         value: edit.value
    //     }))
    //     setEdit({
    //         id: null,
    //         value: ''
    //     })
    // }
    
    if (edit.id){
        return <TodoForm edit={edit}/>;
    }

    return todos.map((todos, index) => (
        <div className={todos.isCompleted ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todos.id} onClick={()=> {handleCompleteClick(todos.id, todos.isCompleted)}}>
                {todos.text}
            </div>
            <div className="icons">
                <BsTrash onClick={()=>{handleDeleteClick(todos.id)}}
                className='delete-icon'/>
                <BsPen  onClick={()=> setEdit({id: todos.id, value:todos.text})}
                className='edit-icon'/>
            </div>
        </div>
    ))
}

export default Todo