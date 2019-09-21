// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Form from './components/form/Form';


function App() {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (i) => {
    setTodos(
      todos.map((todo, k) => k=== i ? {
        ...todo,
        complete: !todo.complete
      } : todo)
    )
  }
  return (
    // define app structure then break into individual components
      <div className="App">
        <Form
          onSubmit={text => setTodos([{ text, complete: false }, ...todos])}
        />
        <div>
          {todos.map(({ text, complete }, i) => (
            <div key={Math.random()} onClick={() => toggleComplete(i)} style={{
              textDecoration: complete ? 'line-through' : ''
            }}>{text}</div>
          ))}
        </div>
        <button onClick={()=> setTodos([])}>Reset</button>
      </div>
  );
}

export default App;
