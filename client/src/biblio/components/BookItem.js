import React from 'react';
import PropTypes from 'prop-types';
import {useMutation} from '@apollo/react-hooks/lib/index';
import queries from '../queries';

function BookItem({ book }) {
  const [selectBook] = useMutation(queries.SELECT_BOOK, {
    variables: { id: book.id },
    refetchQueries: [
      {
        query: queries.GET_SELECTED_BOOK,
      }
    ]
  });

  return (
    <div>
      <p>Title: {book.title}</p>
      {book.author && <p>Author: {book.author.name}</p>}
      {book.wiki && <a href={book.wiki} target="_blank">Wiki</a>}
      <button onClick={selectBook}>Select</button>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookItem;
