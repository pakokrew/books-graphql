import React from 'react';

import { useMutation } from '@apollo/react-hooks';
import queries from '../queries';

function NewAuthor() {
  let inputName, inputAge;
  const [addAuthor, { loading, called}] = useMutation(queries.ADD_AUTHOR, {
    /*update(cache, { data: { addAuthor } }) {
      const { getAuthors } = cache.readQuery({ query: queries.GET_AUTHORS_BOOK });
      const newAuthor = {
        ...addAuthor.author,
        books: [],
      };
      cache.writeQuery({
        query: queries.GET_AUTHORS_BOOK,
        data: { getAuthors: getAuthors.concat([newAuthor]) },
      });
    },*/
    refetchQueries: [
      {
        query: queries.GET_AUTHORS_BOOK,
      }
    ]
  });

  function submit(event) {
    event && event.preventDefault && event.preventDefault();

    addAuthor({
      variables: {
        name: inputName.value,
        age: Number(inputAge.value),
      }}
    );

    inputName.value = '';
    inputAge.value = '';
  }

  return (
    <div>
      <form onSubmit={submit}>
        Name:
        <input
          type="text"
          ref={node => {
            inputName = node;
          }}/>
        Age:
        <input
          type="text"
          ref={node => {
            inputAge = node;
          }}/>
        <button type="submit">Add author</button>
      </form>
      {loading && <p>Inserting author...</p>}
      {called && <p>Author inserted</p>}
    </div>
  );
}

export default NewAuthor;
