// App.js
import React from 'react';
import BookList from './Booklist';
import WithLogging from './Withlogging';

// this is with HOC

const books = [
  { title: 'Book 1', author: 'Author 1', year: 2020 },
  { title: 'Book 2', author: 'Author 2', year: 2018 },
  { title: 'Book 3', author: 'Author 3', year: 2022 },
  // Add more books if you'd like
];

const BookListWithLogging = WithLogging(BookList);

const App = () => {
  return (
    <div>
      <h1>My Book Collection</h1>
      <BookListWithLogging books={books} />
    </div>
  );
};

export default App;
