import React, {useState} from 'react';



export default function navBar({updateMenu}) {
  // const [descr, setDescr]= useState(0);
  // const descrOnClick = ()=>{
  //     setDescr=()=>{descr+1};
  //     if(descr%2===0){
  //       <Menu/>
  //     }
  // }
  return (
    <>
    <nav className="navbar py-2 px-2 is-light" role="navigation" aria-label="main navigation">
  
    <div className="navbar-menu">
      <div className="navbar-start">
        <button onClick={()=>{updateMenu()}} className="navbar-item">
          &#9776;
        </button>
        </div>
  
        <a className="navbar-item is-size-5">
          Lotion
        </a>
        <div className="navbar-end">

        </div>
      </div>
  </nav>
  </>
  )
}
