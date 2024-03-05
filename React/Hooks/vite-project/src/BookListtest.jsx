import React, { useState, useEffect } from 'react';

const BookList = () => {
  const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Simulating fetching book data
    const fetchBookData = () => {
      const initialBooks = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 }
      ];
      setBooks(initialBooks);
    //   setLoading(false); // Set loading to false after fetching data
    };
    // Simulate asynchronous fetch
    fetchBookData()
    // setTimeout(fetchBookData, 2000); // Delay for 2 seconds
  }, []);

  return (
    <div>
        {books.map((book, index) => (
            <h1 key={index}>{book.title}</h1>
          ))}
      {/* Display loading indicator if loading
      {loading ? (
        <p>Loading...</p>
      ) : (
        // Display book titles once data is loaded
        <>
          {books.map((book, index) => (
            <h1 key={index}>{book.title}</h1>
          ))}
          <p>hi</p>
        </>
      )} */}
    </div>
  );
};

export default BookList;