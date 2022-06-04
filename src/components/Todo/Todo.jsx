import React from 'react'

const Todo = ({todo, handleDeleteTodo, doTodo}) => {
  let background = todo.completed ? 
    'bg-gray-400 hover:bg-gray-500 text-center p-4 mx-10 my-5 rounded drop-shadow-lg' 
    : 'bg-blue-400 hover:bg-blue-500 text-center p-4 mx-10 my-5 rounded drop-shadow-lg'

  let decoration = todo.completed ? 'line-through font-bold text-xl p-1 mb-4' : ' font-bold text-xl p-1 mb-4'


  return (
    <div className={background}>
      <button 
        className='w-full h-full' 
        onClick={() => doTodo(todo._id)}
      >
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