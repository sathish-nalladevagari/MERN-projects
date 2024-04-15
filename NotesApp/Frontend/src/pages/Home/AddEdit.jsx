import React, { useState } from 'react'
import TagInput from '../../Components/Input/TagInput'


const AddEdit = () => {


  return (
    <div>
        <div className='flex flex-col gap-2'>
            <label className='input-label'>Title</label>
            <input type="text"
            placeholder='Title'
            className='outline-none border p-2 rounded font-medium text-xl '
             />

        </div>
        <div className='flex flex-col gap-2 mt-4'>
            <label className='input-label'>Content</label>
            <textarea 
            placeholder='Content'
            rows={10}
            className='outline-none border rounded-md bg-slate-50 p-2' />

        </div>
        <div className='mt-3 '>
            <label className='input-label'>Tags</label>
            <TagInput />
        </div>
        <button className='btn-primary font-medium mt-5 p-3'>Submit</button>
    </div>
  )
}

export default AddEdit