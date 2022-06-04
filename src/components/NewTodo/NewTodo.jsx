import React from 'react'

const NewTodo = (props) => {

  return(
    <div className='flex'>
      <form onSubmit={props.handleCreateTodo} className='flex mx-auto'>
        <div className='content-center'>
          <input 
            className='rounded w-full p-1'
            required
            name='title'
            autoComplete='off'
            value={props.title}
            placeholder='TODO:' 
            onChange={(e) => props.setTitle(e.target.value)}
          />
        </div>

        <button 
          className='bg-green-500 hover:bg-green-600 rounded ml-5 p-1'
        >
          Add Todo
        </button>

      </form>
    </div>
  )
}

export default NewTodo