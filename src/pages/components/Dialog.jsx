import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';

const Dialog = ({book, display, setDisplay}) => {
  // console.log(state);
  return (
    <>
    <div style={{"display": display}} className="full-screen" onClick={()=> setDisplay("none")}></div>
    <div style={{"display": display}} className="dialog-box">
      <img src={book["Image-URL-L"]} alt={book["Book-Title"]} className="cover-img" />
      <div className="content">
        <h2>{ book["Book-Title"]}</h2>
        <p><strong>Author:</strong>&nbsp;{book["Book-Author"] }</p>
        <p><strong>ISBN:</strong>&nbsp;{book["ISBN"]}</p>
        <p><strong>Publisher:</strong>&nbsp;{book["Publisher"]}</p>
        <p><strong>Year of Publication:</strong>&nbsp;{book["Year-Of-Publication"]}</p>
      </div>
      <AiFillCloseCircle onClick={()=> setDisplay("none")} className="close"/>
    </div>
    </>
  )
}

export default Dialog
