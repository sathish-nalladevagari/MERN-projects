import React from 'react'
import { getInitials } from '../../utils/helper'

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className='flex items-center gap-3'>
        <div className='w-12 h-12 flex items-center justify-center bg-slate-100 text-slate-900 rounded-full font-medium'>{getInitials("John william")}</div>
        <div className='text-sm text-slate-500 underline'>
            <p className='text-sm font-medium'>John William</p>
            <button onClick={onLogout}>Logout</button>
        </div>
    </div>
  )
}

export default ProfileInfo