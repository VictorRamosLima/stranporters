class StarshipGateway {
  constructor(hostname = 'https://swapi.dev/api') {
    this._url = hostname;
  }

  _createUrl({ pathname, page }) {
    return this._url.concat(`/${pathname}/?page=${page}`);
  }

  async _sendRequest({ url, method }) {
    const response = await fetch(url, { method });
    return response.json();
  }

  async fetchStarships(page) {
    const url = this._createUrl({ pathname: 'starships', page });
    const response = await this._sendRequest({ url, method: 'GET' });

    return response;
  }
}
