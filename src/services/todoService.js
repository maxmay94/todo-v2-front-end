import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/todos/`

export const getAllTodos = async() => {
  try {
    const res = await fetch(BASE_URL)
    const data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}

export const createTodo = async(todo) => {
  try { 

    let todoData = {
      title: todo,
      completed: false
    }

    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers:{
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(todoData)
    })
    const data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}

export const deleteTodo = async(todoId) => {
  try {
    await fetch(`${BASE_URL}${todoId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
  } catch(err) {
    throw err
  }
}

export const doTodo = async(todoId) => {
  try {
    await fetch(`${BASE_URL}${todoId}/done`, {
      method: 'PATCH',
    })
  } catch(err) {
    throw err
  }
}

export const editTodo = async(title, todo) => {

  console.log('title --> ', title)
  console.log('todo --> ', todo)

  let todoData = {
    title: title,
    completed: todo.completed
  }
  
  try {
    const res = await fetch(`${BASE_URL}${todo._id}`, {
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
      body: JSON.stringify(todoData)
    })
    const data = await res.json()
    console.log('data:::',data)
    return data
  } catch(err) {
    throw err
  }
}