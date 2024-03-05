// BookDataLoader.js
import React, { useEffect } from 'react';

const BookDataLoader = ({ setBooks, setLoading }) => {
  useEffect(() => {
    // Simulating fetching book data
    const fetchBookData = () => {
      const initialBooks = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 }
      ];
      setBooks(initialBooks);
      setLoading(false); // Update loading state after fetching data
    };
    fetchBookData();
  }, [setBooks, setLoading]); // Make sure to include setLoading in dependency array

  return null;
};

export default BookDataLoader;