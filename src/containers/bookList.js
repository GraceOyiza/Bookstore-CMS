import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { generateRandomNumber, filterBooksByCategory } from '../table';
import { removeBook, filterBooks } from '../actions';
import Filter from '../components/categoryFilter';


const BooksList = ({
  books, deleteBook, filterBooks, filterParam,
}) => {
  const handleRemoveBook = id => deleteBook(id);
  const handleFilter = e => filterBooks(e.target.value);

  const filteredBooks = filterParam === 'All' ? books : filterBooksByCategory(books, filterParam);

  const allBooks = filteredBooks.map(book => (
    <Book
      id={generateRandomNumber()}
      handleRemoveBook={handleRemoveBook}
      book={book}
      key={generateRandomNumber()}
    />
  ));
  return (
    <div>
      <Filter handleFilter={handleFilter} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allBooks}
        </tbody>
      </table>
    </div>
  );
};


BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  filterBooks: PropTypes.func.isRequired,
  filterParam: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filterParam: state.filter,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: id => dispatch(removeBook(id)),
  filterBooks: category => dispatch(filterBooks(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
