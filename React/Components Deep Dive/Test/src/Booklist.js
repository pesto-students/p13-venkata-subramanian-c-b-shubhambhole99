// BookList.js
import React, { Component } from 'react';
import BookDetail from './BookDetails';
class BookList extends Component {
  render() {
    return (
      <div>
        <h2>List of Books</h2>
        <ul>
          {this.props.books.map((book, index) => (
            <li key={index}>
              <BookDetail book={book} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BookList;
