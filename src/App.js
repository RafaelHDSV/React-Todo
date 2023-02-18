import { useState, UseEffect } from 'react'
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs'

import './App.css';

const API = 'http://localhost:5000'

function App() {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <div className="App">
      <div className="todo_header">
        <h1>React Todo</h1>
      </div>

      <div className="form_todo">
        <p>Form</p>
      </div>

      <div className="list_todo">
        <p>List</p>
      </div>
    </div>
  );
}

export default App;
