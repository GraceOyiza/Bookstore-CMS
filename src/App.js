import React from 'react';
import BooksList from './containers/bookList';
import BookForm from './containers/bookForm';

const App = () => (
  <div className="App pb-5">
    <BooksList />
    <BookForm />
  </div>
);

export default App;
