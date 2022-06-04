import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/todos/`

export const getAllTodos = async() => {
  try {
    const res = await fetch(BASE_URL)
    const data = await res.json()
    console.log('INDEX -->', data)
    return data
  } catch(err) {
    throw err
  }
}

export const createTodo = async(todo) => {
  try { 
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers:{
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(todo)
    })
    const data = await res.json()
    console.log('CREATE TODO --> ',data)
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