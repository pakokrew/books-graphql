import React from 'react';

import AuthorsBooks from '../biblio/components/AuthorsBooks';
import SelectedAuthor from '../biblio/components/SelectedAuthor';
import SelectedBook from '../biblio/components/SelectedBook';
import NewAuthor from '../biblio/components/NewAuthor';
import {useQuery} from '@apollo/react-hooks/lib/index';
import queries from '../biblio/queries';

function Main() {
  const { data: { selectedAuthor } } = useQuery(queries.GET_SELECTED_AUTHOR);
  const { data: { selectedBook } } = useQuery(queries.GET_SELECTED_BOOK);

  return (
    <>
      <AuthorsBooks/>
      <NewAuthor/>
      {selectedAuthor && <SelectedAuthor id={selectedAuthor}/>}
      {selectedBook && <SelectedBook id={selectedBook}/>}
    </>
  );
}

export default Main;
