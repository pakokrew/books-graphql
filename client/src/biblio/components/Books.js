import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import queries from '../queries';

import BookList from '../components/BookList';

function Books() {

  const { data, loading, error } = useQuery(queries.GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <BookList books={data.getBooks} />
  );
}

export default Books;
