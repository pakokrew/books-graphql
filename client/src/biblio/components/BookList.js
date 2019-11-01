import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

function BookList({ books }) {
  return (
    <div>
      <p>Book list:</p>
      <ul>
        {books.map(book => (
          <li key={book.title}>
            <BookItem book={book}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookList;
