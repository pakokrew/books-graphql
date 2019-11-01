const authors = [
  {
    id: '96d4d401-3a37-4a4e-b66f-1f78b29a62aa',
    name: 'Yuval Noah Harari',
    age: 75,
  },
  {
    id: '53822950-7ce7-4f72-abab-e42700fd37ff',
    name: 'Alain Damasio',
    age: 45,
  },
];

const books = [
  {
    id: '92d844b1-e3da-4404-b92c-03615e197081',
    title: 'Sapiens',
    authorId: authors[0].id,
  },
  {
    id: '43008005-2bfe-4e18-8cef-c0c60f400224',
    title: 'La zone du dehors',
    authorId: authors[1].id,
  },
  {
    id: '14e0ab01-708f-4863-95bd-d7f856c4f0b0',
    title: 'Les furtifs',
    authorId: authors[1].id,
  },
];


module.exports = { books, authors };
