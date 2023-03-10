
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';


export default function Note({menu,notes,addNote,activeNote,setActiveNote,deleteNote, activeNoteToId}) {


  const [value, setValue] = useState(''); 
  const [value1, setValue1] = useState('');
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
};

const saveImplementation = (value,value1) =>{
  let hookCall = value+" ";
  const htmlRemoveRegex = "";
  notes.map((note) => (
      note.id === activeNote ? (note.title = value, note.body = value1, setValue(hookCall)): ""
    )) 
    localStorage.setItem("notes", JSON.stringify(notes));
    
   
}

const formatDate = () => {
    const formatted = new Date().toLocaleString("en-US", options);
    if (formatted === "Invalid Date") {
        return "";
    }
    return formatted;
};
const formatDate2 = (date) => {
  const formatted = new Date(date).toLocaleString("en-US", options);
  if (formatted === "Invalid Date") {
      return "";
  }
  return formatted;
};




const changeTextEditor = (note) => {
    setValue(note.title);
    setValue1(note.body);
    {setActiveNote(note.id)}
}


  return(
    <>

  <div className="columns">
    {menu?<><div className="column is-one-fifth">
    
      <div className="level">
    <p className="menu-label has-text-centered is-inline"> 
         <h2 className="has-text-centered py-2 px-5 is-size-3">NOTES </h2> 
    </p>
    <a className=" py-2 is-size-3" onClick={addNote}>&#x2b;</a><hr/>
    </div>
    <ul className="menu-list has-text-centered" >
      <div>
      {notes.map((note)=>(
        <div onClick={()=>changeTextEditor(note)}>
          <div className={note.id===activeNote ? "has-background-primary":""}>
        <strong ><h1 dangerouslySetInnerHTML={{__html: note.title}}></h1></strong>
        <p><h1 dangerouslySetInnerHTML={{__html:note.body && note.body.substr(0,30)}}></h1></p>
        <p>{formatDate2(note.lastModified)}</p>
        <hr />
        </div>
        </div>
      ))}
      </div>
    </ul>
    <hr />
    <div className="vl"></div>
    
    </div></>:<></>}
    <vl/>

  <div className='column is-four-fifth'>
  <>{notes.length===0?<p className='has-text-centered is-size-2 py-6 '><b className="py-6">Click + to add a new note.......</b></p>:""}</>
    <div className={notes.length===0?"is-hidden":""}>
  <nav className="navbar px-2 py-1" aria-label="main navigation">
  
  <div className="navbar-menu">
    <div className="navbar-start">
    <div id="text1"><ReactQuill theme="bubble" placeholder='Title here,,' value={value} onChange={setValue}/>
    <p className='text1 px-3 is-size-6'>{formatDate()}</p>
    </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item "onClick={()=>saveImplementation(value,value1)}><a>{
          
          }</a></div>
      <div className="navbar-item" onClick={()=>deleteNote(activeNote)}><a>DELETE</a></div>
      </div>
    </div>
</nav>

    <div id="text2 container" className='px-3'><ReactQuill className='textBox' theme="snow" placeholder='Your Note Here' value={value1} onChange={setValue1} /></div>
    </div>
    </div>
    </div>
    </>
    )
}