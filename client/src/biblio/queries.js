import { gql } from 'apollo-boost';

const GET_BOOKS = gql`
query GetBooks {
  getBooks {
    title
    author {
      name
      age
    }
  }
}
`;

const GET_BOOK_BY_ID = gql`
query GetBookById ($id: ID!) {
  getBookById(id: $id) {
    id
    title
    read @client
    author {
      name
      age
    }
  }
}
`;

const GET_AUTHOR_BY_ID = gql`
query GetAuthorById ($id: ID!) {
  getAuthorById(id: $id) {
    id
    name
    age
    books {
      id
      title
      read @client
    }
  }
}
`;

const GET_AUTHORS = gql`
query GetAuthors {
  getAuthors {
    name
    age
  }
}
`;

const GET_AUTHORS_BOOK = gql`
query GetAuthors {
  getAuthors {
    id
    name
    age
    books {
      id
      title
      wiki
    }
  }
}
`;

const ADD_AUTHOR = gql`
mutation AddAuthor($name: String!, $age: Int!) {
  addAuthor(author: {name: $name, age: $age}) {
    success
    author {
      id
      name
      age
    }
  }
}
`;
const EDIT_AUTHOR = gql`
mutation EditAuthor($id: ID!, $name: String, $age: Int) {
  editAuthor(id: $id, editData: {name: $name, age: $age}) {
    success
    author {
      id
      name
      age
    }
  }
}
`;

const TOGGLE_READ = gql`
mutation ToggleRead($id: ID!) {
  toggleRead(id: $id) @client
}
`;

const READ_BOOKS = gql`
  query GetReadBooks {
    readBooks @client
  }
`;

const GET_SELECTED_BOOK = gql`
  query GetSelectedBook {
    selectedBook @client
  }
`;

const GET_SELECTED_AUTHOR = gql`
  query GetSelectedAuthor {
    selectedAuthor @client
  }
`;

const SELECT_BOOK = gql`
mutation SelectBook($id: ID!) {
  selectBook(id: $id) @client
}
`;

const SELECT_AUTHOR = gql`
mutation SelectAuthor($id: ID!) {
  selectAuthor(id: $id) @client
}
`;

export default {
  GET_BOOKS,
  GET_BOOK_BY_ID,
  GET_AUTHOR_BY_ID,
  GET_AUTHORS,
  GET_AUTHORS_BOOK,
  ADD_AUTHOR,
  EDIT_AUTHOR,
  TOGGLE_READ,
  READ_BOOKS,
  GET_SELECTED_BOOK,
  GET_SELECTED_AUTHOR,
  SELECT_BOOK,
  SELECT_AUTHOR,
};
