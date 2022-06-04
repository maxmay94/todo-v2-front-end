import React from 'react'

const Todo = ({todo, handleDeleteTodo}) => {
  let background = todo.completed ? 
    'bg-pink-400 hover:bg-pink-500 text-center p-4 mx-10 my-5 rounded' 
    : 'bg-green-400 hover:bg-green-500 text-center p-4 mx-10 my-5 rounded'

  let decoration = todo.completed ? 'line-through' : ''


  return (
    <div className={background}>
      <button className='w-full h-full'>
          <h1 className={decoration}>{todo.title}</h1>
      </button>
      <div className='flex'>

        <button 
          className='bg-yellow-400 hover:bg-yellow-500 rounded p-1 mx-10 flex-1'
        >
          Edit Todo
        </button>

        <button 
          className='bg-red-400 hover:bg-red-500 rounded p-1 mx-10 flex-1'
          onClick={() => handleDeleteTodo(todo._id)}
        >
          Delete Todo
        </button>

      </div>
    </div>
  )
}

export default Todo