import React,{useState} from 'react'
import '../../styles/HomePage.scss';
import Card from './Card'

const showSim = (text, setSimilar, setRecom) => {
  setRecom([]);
  fetch('http://127.0.0.1:8000/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*"
    },
    body: JSON.stringify({text}),
    })
    .then(res => res.json())
    .then(res=>setSimilar(res.reply))
    .catch(error => {console.error('Error:', error); });
};

const showRecom = (text, setRecom, setSimilar) => {
    console.log(text)
    setSimilar([])
    fetch('http://127.0.0.1:8000/recommend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      },
      body: JSON.stringify({text}),
      })
      .then(res => res.json())
      .then(res=>setRecom(res.reply))
      .catch(error => {console.error('Error:', error); });
  };

const SearchScreen = () => {
  const [recom, setRecom] = useState([]);
  const [similar, setSimilar] = useState([]);
  return (
    <div className="search-screen">
    <input type="text" placeholder='Search by keywords...'  onKeyDown={e=>{if(e.key==='Enter') showSim(e.target.value,setSimilar,setRecom)}}/>
    <div className="display-container">
    
      {
        recom.length>0?
          recom.map(book => <Card key={book["ISBN"]} book={book}/>)
        : console.log("hello")
      }
      <div className="sug">
        {
            similar.length>0?
                similar.map(item => <h1 onClick={()=>{showRecom(item, setRecom, setSimilar)}}>{item}</h1>)
            :console.log("hello2")
        }
      </div>
    </div>
    </div>
  )
}

export default SearchScreen
// Harry Potter and the Prisoner of Azkaban