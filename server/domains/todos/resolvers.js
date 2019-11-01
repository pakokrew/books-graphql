const Todo = require('./Todo');

const resolvers = {
  Query: {
    todos: () => Todo.all(),
  },
  Mutation: {
    newTodo: (_, { todo: todoInput } ) => {
      const todo = Todo.new(todoInput.text);
      return {
        success: true,
        todo,
      };
    }
  },
  MutationResponse: {
    __resolveType(mutationResponse, context, info){
      return null;
    },
  },
};

module.exports = resolvers;
