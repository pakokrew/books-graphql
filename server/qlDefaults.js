const { gql } = require('apollo-server');

const typeDef = gql`
  type Query
  
  type Mutation
  
  interface MutationResponse {
    success: Boolean!
  }
`;

const resolvers = {
  MutationResponse: {
    __resolveType(mutationResponse, context, info){
      return null;
    },
  },
};

module.exports = {
  typeDef,
  resolvers,
}
