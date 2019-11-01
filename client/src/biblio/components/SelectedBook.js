import React from 'react';

import queries from '../queries';
import {useMutation, useQuery} from '@apollo/react-hooks/lib/index';

import BookItem from './BookItem';

function SelectedBook({ id }) {

  const { data, loading, error } = useQuery(queries.GET_BOOK_BY_ID,  {
    variables: {
      id,
    },
  });
  const [toggleRead] = useMutation(queries.TOGGLE_READ, {
    variables: { id },
    refetchQueries: [
      {
        query: queries.GET_BOOK_BY_ID,
        variables: {
          id,
        }
      }
    ]
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="box">
      Selected book
      <BookItem book={data.getBookById} />

      <button onClick={toggleRead}>{data.getBookById.read ? 'unread' : 'read'}</button>
    </div>
  );
}

export default SelectedBook;
