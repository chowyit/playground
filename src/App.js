import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

const App = () => {
  
  return (
    <div className="container"> 
      <Header />
      <div className="todo-app">
        <div>
          <TodoList /> 
        </div>
      </div>
    </div>
  );
}

export default App;
