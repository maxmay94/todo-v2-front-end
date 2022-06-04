import React from 'react'

const EditTodo = (props) => {
  props.setOneTodo(props.todo)

  return(
    <div className='flex'>
      <form onSubmit={props.editTodo} className='flex mx-auto'>
        <div className='content-center'>
          <input 
            className='rounded w-full p-1'
            required
            name='title'
            autoComplete='off'
            value={props.editTitle}
            placeholder='TODO:' 
            onChange={(e) => props.setEditTitle(e.target.value)}
          />
        </div>

        <button className='bg-green-500 hover:bg-green-600 rounded ml-5 p-1'>
          Edit Todo
        </button>

      </form>
    </div>
  )
}

export default EditTodo