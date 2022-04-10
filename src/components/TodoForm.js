import React, {useState, useEffect, useRef} from 'react'
import {useDispatch} from 'react-redux';
import {addTodos, updateTodo} from '../redux/reducer';

function TodoForm(props) {
 
  const [input, setInput] = useState(props.edit ? props.edit.value : '')
  const inputRef = useRef(null)
  const dispatch = useDispatch();
  
  useEffect(() => {
      inputRef.current.focus()
  })

  const handleChange = e => {
      setInput(e.target.value);
  }
  const handleSubmitAdd = e => {
    e.preventDefault();
    dispatch(
        addTodos({    
            text: input,
        })) 
    setInput('');
  }
 
//   const handleSubmitUpdate = e => {
//       e.preventDefault();
//       dispatch(
//           updateTodo({
//               id: props.edit.id,
//               text: input
//           })
//       )
//       props.edit.id = null;
//   }

  return (
    <form className="todo-form" onSubmit={handleSubmitAdd}>
        {props.edit ? (
        <>
        <input 
            type="text" 
            placeholder="Update your to-do-list" 
            className="todo-input edit"
            name="text"
            value={input} 
            onChange={handleChange}
            ref={inputRef}
            />
        <button className="todo-button edit" type="submit" >
            Update
        </button>
        </>
        ):(
        <>
        <input 
            type="text" 
            placeholder="What's up for today?" 
            className="todo-input"
            name="text"
            value={input} 
            onChange={handleChange}
            ref={inputRef}
        />
        <button className="todo-button" type="submit">
            Add
        </button>
        </>
        )  
        }
        
    </form>
  )
}

export default TodoForm