import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
 
  const [input, setInput] = useState(props.edit ? props.edit.value : '')
  const inputRef = useRef(null)
  
  useEffect(() => {
      inputRef.current.focus()
  })

  const handleChange = e => {
      setInput(e.target.value);
  }
  const handleSubmit = e => {
      e.preventDefault();

      props.onSubmit({
        id: Math.floor(Math.random() * 100000),
        text: input
      });
      setInput('');
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
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
        <button className="todo-button edit" type="submit">
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