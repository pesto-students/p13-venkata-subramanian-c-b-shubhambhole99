import React, { useState,useContext } from 'react';
import BookDataLoader from './BookDataLoader';
import useBookFilter from './useBookFilter';
import ThemeContext from './context/ThemeContext';
import useBookSorter from './Sorter';


const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state

//   Search Mechanism
  const [searchTerm, setSearchTerm] = useState('');
  const filteredBooks = useBookFilter(books, searchTerm);
  const theme = useContext(ThemeContext);


//   Sorter
const [sortingCriteria, setSortingCriteria] = useState('title');
const sortedBooks = useBookSorter(books, sortingCriteria);

const handleSortingChange = (event) => {
    setSortingCriteria(event.target.value);
  };

  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#333' }}>
      <BookDataLoader setBooks={setBooks} setLoading={setLoading} />
     {/* Books */}
     <div >
      {!loading && books.map((book, index) => (
        <h1 key={index}>{book.title}</h1>
      ))}
      {loading && <p>Loading...</p>}
      <p>hi</p>
      </div>
      {/* filter */}
      <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul style={{width:'20%',margin:'auto'}}>
        {filteredBooks.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
    </div>
{/* Sorter */}
<div>
      <label htmlFor="sorting">Sort by:</label>
      <select id="sorting" value={sortingCriteria} onChange={handleSortingChange}>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="year">Year</option>
      </select>
      
      <ul>
        {sortedBooks.map((book, index) => (
          <li key={index}>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.year}</p>
          </li>
        ))}
      </ul>
    </div>

    </div>
  );
};

export default BookList;
