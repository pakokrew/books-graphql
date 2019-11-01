import React from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';
import {useMutation} from '@apollo/react-hooks/lib/index';
import queries from '../queries';

function AuthorItem({ author }) {
  const [selectAuthor] = useMutation(queries.SELECT_AUTHOR, {
    variables: { id: author.id },
    refetchQueries: [
      {
        query: queries.GET_SELECTED_AUTHOR,
      }
    ]
  });

  //function selectAuthor() {}
  return (
    <div>
      <p>Name: {author.name}</p>
      <p>Age: {author.age}</p>
      <button onClick={selectAuthor}>Select</button>
      {author.books && author.books.length ? <BookList books={author.books}/> : <p>No books</p>}
      {/*<p><a onClick={() => selectAuthor()}>Select author</a></p>*/}
    </div>
  );
}

AuthorItem.propTypes = {
  author: PropTypes.object.isRequired,
};

export default AuthorItem;
