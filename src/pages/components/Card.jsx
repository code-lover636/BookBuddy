import React, {useState} from 'react'
import Dialog from './Dialog'

const Card = ({book}) =>{
    const [display, setDisplay] = useState("none");
    return(
      <>
      <Dialog book={book} display={display} setDisplay={setDisplay}/>
      <div title={book["Book-Title"]} className="card-container" onClick={()=>setDisplay("flex")}  >
        <img src={book["Image-URL-L"]} alt="book image" />
        <small>{book["Book-Title"]}</small>
      </div>
      </>
    );
  }

export default Card
