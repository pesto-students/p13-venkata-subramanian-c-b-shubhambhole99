import React, { useState } from 'react';
import BookDataLoader from './BookDataLoader';

const LoadBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state

  return (
    <div>
      <BookDataLoader setBooks={setBooks} setLoading={setLoading} />
      {!loading ? (
        books.map((book, index) => (
          <h1 key={index}>{book.title}</h1>
        ))
      ) : (
        <p>Loading...</p>
      )}
      <p>hi</p>
    </div>
  );
};
export default LoadBooks;
