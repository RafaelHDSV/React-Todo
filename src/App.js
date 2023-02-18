import { useState, UseEffect } from 'react'
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs'

import './App.css';

const API = 'http://localhost:5000'

function App() {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    }

    console.log(todo);

    setTitle('')
    setTime('')
  }

  return (
    <div className="App">
      <div className="todo_header">
        <h1>React Todo</h1>
      </div>

      <div className="form_todo">
        <h2>Insira a sua próxima tarefa:</h2>

        <form onSubmit={handleSubmit}>
          <div className="form_control">
            <label htmlFor="title">O que você vai fazer?</label>
            <input type="text" name='title' placeholder='Título da tarefa' value={title || ''} required onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="form_control">
            <label htmlFor="time">Duração:</label>
            <input type="text" name='time' placeholder='Tempo estimado (em horas)' value={time || ''} required onChange={(e) => setTime(e.target.value)} />
          </div>

          <input type="submit" value="Criar Tarefa" />
        </form>
      </div>

      <div className="list_todo">
        <h2>Lista de Tarefas: </h2>
        {todos.length === 0 && (<p>Não há tarefas</p>)}
      </div>
    </div>
  );
}

export default App;
