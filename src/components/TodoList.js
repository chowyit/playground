import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import ClearAll from './ClearAll';


function TodoList() {

  const [todos, setTodos] = useState([]);
  const addTodo = todo => {
      if(!todo.text || /^\s*$/.test(todo.text)){
          return
      } //check for empty input

      const newTodos = [todo, ...todos]

      setTodos(newTodos);
  }
  const editTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue :item)))
  }
  
  const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id)

      setTodos(removeArr);
  }

  const removeAll = () => {
     setTodos([]);
  }

  const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
          if (todo.id === id){
              todo.isComplete = !todo.isComplete;
          }

          return todo;
      })
      setTodos(updatedTodos);
  }
    
  return (
    <div>
        <h1>What's the plan for today?</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} editTodo={editTodo}/>
        {todos.length > 0 ? (<ClearAll removeAll={removeAll}/>): '' }
        
    </div>
  )
}

export default TodoList