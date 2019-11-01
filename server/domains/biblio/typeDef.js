const { gql } = require('apollo-server');

module.exports = gql`
  type Book {
    id: ID!
    title: String!
    author: Author!
    wiki: String
  }
  type Author {
    id: ID!
    name: String!
    age: Int!
    books: [Book]!
  }
  
  extend type Query {
    getBooks: [Book]!
    getBook(title: String!): Book
    getBookById(id: ID!): Book
    getAuthors: [Author]!
    getAuthor(name: String!): Author
    getAuthorById(id: ID!): Author
  }
  
  extend type Mutation {
    addAuthor(author: AuthorInput): AddAuthorResponse
    editAuthor(id: ID!, editData: EditAuthorInput): AddAuthorResponse
    addBook(book: BookInput): AddBookResponse
  }
  
  input AuthorInput {
    name: String!
    age: Int!
  }
  
  input EditAuthorInput {
    name: String
    age: Int
  }
  
  type AddAuthorResponse implements MutationResponse {
    success: Boolean!
    author: Author!
  }
  
  input BookInput {
    title: String!
    authorId: ID!
  }
  type AddBookResponse implements MutationResponse {
    success: Boolean!
    book: Book!
  }
`;
