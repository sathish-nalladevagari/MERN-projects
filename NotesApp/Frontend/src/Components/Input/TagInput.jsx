import React from 'react'

const TagInput = () => {
  return (
    <div>
        <div className='flex items-center gap-4 mt-3'>
            <input
            type='text'
            placeholder='Add tags'
            className='outline-none p-2 border '
            />
            <button>Add</button>

        </div>
    </div>
  )
}

export default TagInput