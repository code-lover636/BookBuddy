import React, {useState, useEffect} from 'react';
import '../../styles/HomePage.scss';
import Card from './Card'

const showPopular = (setBookList) => {
  fetch('http://127.0.0.1:8000/popular', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*"
    },
    })
    .then(res => res.json())
    .then(res=>{
      console.log(res);
      setBookList(res.books);
    })
    .catch(error => {console.error('Error:', error); });
};



const HomeScreen = () => {
  const [bookList, setBookList] = useState([]);
  useEffect(() => showPopular(setBookList),[]);
  // Book-Author: "Ellen Gilchrist"
  // Book-Rating: 10
  // Book-Title: "In the Land of Dreamy Dreams"
  // ISBN: "0316313068"
  // Image-URL-L: "http://images.amazon.com/images/P/0316313068.01.LZZZZZZZ.jpg"
  // Image-URL-M: "http://images.amazon.com/images/P/0316313068.01.MZZZZZZZ.jpg"
  // Image-URL-S: "http://images.amazon.com/images/P/0316313068.01.THUMBZZZ.jpg"
  // Num-Rated: 424
  // Publisher: "Little Brown &amp; Co"
  // User-ID: 75591
  // Year-Of-Publication: 1985

  return (
    <div className="wrapper">
    <h1>Popular 100 Books</h1>
    <div className="display-container">
      {
        bookList.length > 0 ?
          bookList.map(book => <Card key={book["ISBN"]} book={book}/>)
        : console.log("loading...")
      }
    </div>
    </div>
  );
};

export default HomeScreen;

