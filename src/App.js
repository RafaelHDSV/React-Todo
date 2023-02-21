import { useState, UseEffect, useEffect } from 'react'
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs'

import './App.css';

const API = 'http://localhost:5000'

function App() {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  // Load todo on the page
  useEffect(() => {
    const loadData = async () => {
      setLoading(true)

      const res = await fetch(API + '/todos')
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err))

      setLoading(false)
      setTodos(res)
    }

    loadData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    }

    await fetch(API + '/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json"
      }
    })

    setTodos((prevState) => [...prevState, todo])

    setTitle('')
    setTime('')
  }

  // FAZER TALVEZ
  if (loading) {
    return <p>Carregando...</p>
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
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <h3 className={todo.done ? 'todo_done' : ''}>{todo.title}</h3>
            <p>Duração: {todo.time}</p>

            <div className="actions">
              <span>
                {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
              </span>

              <BsTrash />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
