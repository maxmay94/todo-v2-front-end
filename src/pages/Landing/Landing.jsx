import React, { useState, useEffect } from 'react'

import NewTodo from '../../components/NewTodo/NewTodo'
import Todo from '../../components/Todo/Todo'
import { getAllTodos, createTodo, deleteTodo, doTodo } from '../../services/todoService'

const Landing = ({ user }) => {
  const [todos, setTodos] = useState([{}])
  const [title, setTitle] = useState('')

  useEffect(() => {
    const fetchAllTodos = async() => {
      const todoData = await getAllTodos()
      setTodos(todoData)
    }
    fetchAllTodos()
  }, [])

  const handleCreateTodo = async(e) => {
    e.preventDefault()
    try {
      await createTodo(title)
      const todoData = await getAllTodos()
      setTodos(todoData)
      setTitle('')
    } catch(err) {
      throw err
    }
  }

  const handleDeleteTodo = async(todoId) => {
    try {
      await deleteTodo(todoId)
      const todoData = await getAllTodos()
      setTodos(todoData)
    } catch(err) {
      throw err
    }
  }

  const handleDoTodo = async(todoId) => {
    try {
      await doTodo(todoId)
      const todoData = await getAllTodos()
      setTodos(todoData)
    } catch(err) {
      throw err
    }
  }


  return (
    <div>
      <h1 className='text-center text-2xl my-5'>What Are We Doing Today?</h1>
      <NewTodo 
        handleCreateTodo={handleCreateTodo}
        title={title}
        setTitle={setTitle} 
      /> 
      {
        todos&&
        todos?.map((todo, i) => (
          <div key={i}>
            <Todo 
              todo={todo} 
              handleDeleteTodo={handleDeleteTodo} 
              doTodo={handleDoTodo}
            />
          </div>
        ))
      }
    </div>
  )
}

export default Landing