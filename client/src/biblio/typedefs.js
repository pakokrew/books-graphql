import { gql } from 'apollo-boost';

export default gql`
  extend type Query {
    selectedBook: ID
    selectedAuthor: ID
    readBooks: [ID]!
  }
  
  extend type Book {
    read: Boolean
  }
  
  extend type Mutation {
    toggleRead(id: ID!): Book!
    selectAuthor(id: ID!): Author!
    selectBook(id: ID!): Author!
  }
`;
