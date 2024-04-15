import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import NoteCard from "../../Components/Cards/NoteCard"
const Home = () => {
  return (
    <div>
      <Navbar />
      

      <div className='container mx-auto'>
        <NoteCard title="Hello world"  date="30 Apr 2024" content="Missing wthe dsisag" tags="#metting" isPinned={true} />
      </div>
    </div>
  )
}

export default Home