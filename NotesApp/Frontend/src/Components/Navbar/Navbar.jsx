import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import {useNavigate} from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

const Navbar = () => {
  const [searchQuery , setSearchQuery] = useState("")

  const navigate = useNavigate()
  const onLogout = () =>{
    navigate("/login")
  }

  const handleSearch = ()=>{

  }

  const onClearSearch = () =>{
    setSearchQuery("")
  }
  return (
    <div className='bg-white flex items-center justify-between px-7 py-2 shadow-md'>
        <h2 className='font-medium text-xl'>Notes</h2>

        <SearchBar value={searchQuery} onChange={({target}) => setSearchQuery(target.value)} onClearSearch={onClearSearch} handleSearch={handleSearch}/>

        <ProfileInfo onLogout={onLogout}/>
    
    </div>
  )
}

export default Navbar