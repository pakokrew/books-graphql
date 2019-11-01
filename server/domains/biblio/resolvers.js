const { find, filter } = require('lodash');
const uuid = require('uuid/v4');

const resolvers = {
  Query: {
    getBooks: (_, __, { dataSources }) => {
      return dataSources.store.biblio.books;
    },
    getBook: (_, { title }, { dataSources }) => find(dataSources.store.biblio.books, { title }),
    getBookById: (_, { id }, { dataSources }) => find(dataSources.store.biblio.books, { id }),

    getAuthors: (_, __, { dataSources }) => dataSources.store.biblio.authors,
    getAuthor: (_, { name }, { dataSources }) => find(dataSources.store.biblio.authors, { name }),
    getAuthorById: (_, { id }, { dataSources }) => find(dataSources.store.biblio.authors, { id }),
  },
  Mutation: {
    addAuthor(_, { author }, { dataSources }) {
      const newAuthor = {
        id: uuid(),
        name: author.name,
        age: author.age,
      };
      dataSources.store.biblio.authors.push(newAuthor);
      return {
        success: true,
        author: newAuthor,
      };
    },
    editAuthor(_, { id, editData }, { dataSources }) {
      const author = find(dataSources.store.biblio.authors, { id });
      if(editData.name) {
        author.name = editData.name;
      }
      if(editData.age) {
        author.age = editData.age;
      }
      return {
        success: true,
        author: author,
      };
    },
    addBook(_, { book }, { dataSources }) {
      const newBook = {
        title: book.title,
        authorId: book.authorId,
      };
      dataSources.store.biblio.books.push(newBook);
      return {
        success: true,
        book: newBook,
      };
    },
  },
  Book: {
    author: (parent, _, { dataSources }) => {
      return find(dataSources.store.biblio.authors, { id: parent.authorId })
    },
    async wiki(parent, args, context) {
      return context.dataSources.wikiSearch.getWikiUrl(parent.title);
    }
  },
  Author: {
    books: (parent, _, { dataSources }) => {
      return filter(dataSources.store.biblio.books, { authorId: parent.id })
    }
  }
};

module.exports = resolvers;
