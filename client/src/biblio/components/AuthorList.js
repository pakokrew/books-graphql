import React from 'react';
import PropTypes from 'prop-types';
import AuthorItem from './AuthorItem';

function AuthorList({ authors }) {
  return (
    <div>
      <p>Author list:</p>
      <ul>
        {authors.map(author => (
          <li key={author.name}>
            <AuthorItem author={author}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
};

export default AuthorList;
