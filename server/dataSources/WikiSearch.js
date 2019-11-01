const { RESTDataSource } = require('apollo-datasource-rest');

class WikiSearch extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://fr.wikipedia.org/w/api.php';
  }

  async getWikiUrl(title) {
    const r = await this.get('', {
      action: 'opensearch',
      search: title,
    });
    return r[3][0];
  }
}

module.exports = WikiSearch;
