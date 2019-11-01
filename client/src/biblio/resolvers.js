//import { gql } from 'apollo-boost';

import queries from './queries';

export default {
  Book: {
    read: (book, _, { cache }) => {
      const { readBooks } = cache.readQuery({ query: queries.READ_BOOKS });
      return readBooks.includes(book.id);
    },
  },
  Mutation: {
    toggleRead(_root, { id }, { cache, getCacheKey }) {
      const { readBooks } = cache.readQuery({ query: queries.READ_BOOKS });
      const data = {
        readBooks: readBooks.includes(id) ?
          readBooks.filter(i => i !== id) :
          readBooks.concat(id)
      };
      cache.writeQuery({ query: queries.READ_BOOKS, data });
      return data.readBooks;
    },

    selectAuthor(_root, { id }, { cache }) {
      const data = {
        selectedAuthor: id,
      };
      cache.writeQuery({ query: queries.GET_SELECTED_AUTHOR, data });
    },
    selectBook(_root, { id }, { cache }) {
      const data = {
        selectedBook: id,
      };
      cache.writeQuery({ query: queries.GET_SELECTED_BOOK, data });
    },
    /*toggleRead(_root, variables, { cache, getCacheKey }) {
      const id = getCacheKey({
        __typename: 'Book',
        id: variables.id,
      });

      console.log(id);
      const fragment = gql`
        fragment readBook on Book {
            read @client
          }
      `;
      console.log(fragment);

      const book = cache.readFragment({ fragment, id });
      console.log(book);
      const data = { ...book, read: !book.read };
      console.log(data);
      cache.writeData({ id, data });
      return null;
    },*/
  },
};
