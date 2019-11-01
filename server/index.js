const { ApolloServer } = require('apollo-server');

const store = require('./store');
const qlDefaults = require('./qlDefaults');
const dataSources = require('./dataSources');

const Todos = require('./domains/todos');
const Books = require('./domains/biblio');

const server = new ApolloServer({
  typeDefs: [ qlDefaults.typeDef, Todos.typeDef, Books.typeDef ],
  resolvers: [ qlDefaults.resolvers, Todos.resolvers, Books.resolvers ],
  dataSources: () => {
    return {
      store,
      wikiSearch: new dataSources.WikiSearch(),
    }
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
