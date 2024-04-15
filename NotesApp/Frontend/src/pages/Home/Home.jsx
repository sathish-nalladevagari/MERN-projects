import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import NoteCard from "../../Components/Cards/NoteCard";
import AddEdit from "./AddEdit";
import Modal from 'react-modal';
const Home = () => {

  const [openAddEdit, setOpenAddEdit] = useState({
    isShown: false,
    type: "add",
    data: null
  });

  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-5 mt-8">

          <NoteCard
            title="Hello world"
            date="30 Apr 2024"
            content="Missing wthe dsisag"
            tags="#metting"
            isPinned={true}
            onDelete={() => { }}
            onEdit={() => { }}
            onPinNote={() => { }}
          />

        </div>

      </div>
      <button onClick={()=> {
        setOpenAddEdit({isShown : true , type : "add" , data : null })
      }} className="absolute right-10 bottom-10 border rounded-lg h-14 w-14 bg-primary text-black hover:bg-blue-400 transition-all ease-in-out z-10">
        Add
      </button>
      <Modal
        isOpen={openAddEdit.isShown}
        onRequestClose={() => {

         }}
        className="bg-white w-[40%] max-h-3/4 rounded mx-auto px-5 py-2 mt-5 overflow-scroll"
        contentLabel=""
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.2)'
          },
        }}
      >
        <AddEdit />
      </Modal>
    </>
  );
};

export default Home;
