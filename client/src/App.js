import React from 'react';
import './App.css';

import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';

import Main from './pages/Main';

import biblioResolvers from './biblio/resolvers';
import biblioTypeDefs from './biblio/typedefs';

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache,
  typeDefs: [biblioTypeDefs],
  resolvers: [biblioResolvers],
});

cache.writeData({
  data: {
    selectedAuthor: null,
    selectedBook: null,
    readBooks: [],
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          Books
        </header>
       <Main />
      </div>
    </ApolloProvider>
  );
}

export default App;
