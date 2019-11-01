const { gql } = require('apollo-server');

module.exports = gql`
  type Todo {
    text: String!
    done: Boolean!
  }
  
  extend type Query {
    todos: [Todo]!
  }
  
  extend type Mutation {
    newTodo(todo: TodoInput): NewTodoResponse
  }
  
  type NewTodoResponse implements MutationResponse {
    success: Boolean!
    todo: Todo!
  }
  
  input TodoInput {
    "Text of the todo"
    text: String!
  }
`;
