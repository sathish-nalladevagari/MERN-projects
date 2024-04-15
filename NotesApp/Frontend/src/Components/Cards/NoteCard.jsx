import React from 'react'
import { MdCreate, MdDelete, MdOutlinePushPin } from 'react-icons/md'

const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
  return (
    <div className='border rounded-md px-5 py-7 mt-5 bg-white hover:shadow-xl transition-all ease-in-out'>
      <div className='flex items-center justify-between'>

        <div>
          <h6 className='text-sm font-medium'>{title}</h6>
          <span className='text-xs text-slate-500'>{date}</span>
        </div>

        <MdOutlinePushPin className='' onClick={onPinNote} />
      </div>
      <p className=''>{content?.slice(0, 60)}</p>

      <div>
        <div className='text-xs text-slate-500'>
          {tags}
        </div>

        <div className='flex items-center gap-2'>
          <MdCreate className='icon-btn hover:text-green-600' onClick={onEdit}/>

          <MdDelete className='icon-btn hover:text-red-500' onClick={onDelete} />
        </div>
      </div>

    </div>
  )
}

export default NoteCard