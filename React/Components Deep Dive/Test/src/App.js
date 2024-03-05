import logo from './logo.svg';
import './App.css';
import MyComponentWithLogger from './HOC1'
import BookList from './Booklist';

const books = [
  { title: 'Book 1', author: 'Author 1', year: 2020 },
  { title: 'Book 2', author: 'Author 2', year: 2018 },
  { title: 'Book 3', author: 'Author 3', year: 2022 },
  // Add more books if you'd like
];


function App() {
  return (
    <div className="App">
      <BookList books={books}/>
     {/* <MyComponentWithLogger/> */}
    </div>
  );
}

export default App;
