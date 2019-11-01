import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import queries from '../queries';

import AuthorList from './AuthorList';

function Books() {

  const { data, loading, error } = useQuery(queries.GET_AUTHORS_BOOK, {
    //pollInterval: 1000,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="box">
      <AuthorList authors={data.getAuthors} />
    </div>
  );
}

export default Books;
