import "./App.css";
import React, {useState,useEffect} from 'react';
import NavBar from "./components/NavBar";
import Note from "./components/Note";
import uuid from "react-uuid";


function App() {
    const [menu, setMenu] = useState(false);
    const updateMenu= () =>{
        if(menu === false){
        setMenu(true);
        }
    
    else{
        setMenu(false);
    }
}


const addNote=()=>{
    const newNote = {
        id: uuid(),
        title:"<b>Untitled Note</b>",
        body:"Text here", 
        lastModified:Date.now(),
        saveCheck:false
    }
    setNotes([newNote,...notes]);
}
 const [activeNote, setActiveNote]= useState(false);
 const deleteNote=(id)=>{
  let check = window.confirm("You sure?");
    if(check === true){
    setNotes(notes.filter((note)=>note.id!==id));
    }
 };

 const [notes, setNotes] = useState(
  localStorage.notes ? JSON.parse(localStorage.notes) : []
)


useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes));
}, [notes]);

  return ( 
    <div> 
      <NavBar updateMenu = {updateMenu}/>
      <Note menu={menu} notes={notes} addNote={addNote} activeNote={activeNote}
       setActiveNote={setActiveNote} deleteNote={deleteNote}/>
    </div>
  );
}
export default App;
