import React from 'react';



function Test({books}) {
  return (
    <div>
       <h2>List of Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <div>Title: {book.title}</div>
            <div>Author: {book.author}</div>
            <div>Year: {book.year}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
