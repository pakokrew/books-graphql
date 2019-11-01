import React from 'react';

import queries from '../queries';
import {useMutation, useQuery} from '@apollo/react-hooks/lib/index';

import AuthorItem from './AuthorItem';

function SelectedAuthor({ id }) {
  let inputAge;

  const { data, loading, error } = useQuery(queries.GET_AUTHOR_BY_ID,  {
    variables: {
      id,
    },
  });
  const [editAuthor] = useMutation(queries.EDIT_AUTHOR);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;


  function submitEdit(event) {
    event && event.preventDefault && event.preventDefault();

    console.log(data);
    editAuthor({
      variables: {
        id: data.getAuthorById.id,
        age: Number(inputAge.value),
      }}
    );

    inputAge.value = '';
  }

  return (
    <div className="box">
      Selected author
      <AuthorItem author={data.getAuthorById} />

      <p>Edit</p>
      <form onSubmit={submitEdit}>
        Age:
        <input
          type="text"
          ref={node => {
            inputAge = node;
          }}/>
        <button type="submit">Edit author</button>
      </form>
    </div>
  );
}

export default SelectedAuthor;
