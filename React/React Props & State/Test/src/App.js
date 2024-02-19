import logo from './logo.svg';
import BookList from './BookList';
import Counter from './Counter';

const books = [
  { title: 'Book 1', author: 'Author 1', year: 2020 },
  { title: 'Book 2', author: 'Author 2', year: 2018 },
  { title: 'Book 3', author: 'Author 3', year: 2022 },
  // Add more books if you'd like
];

function App() {
  return (
    <div>
      <h1>My Book Collection</h1>
      <BookList books={books} />
      <Counter/>
    </div>
  );
};

export default App;
