class StarshipService {
  constructor(
    gateway = new StarshipGateway(),
    converter = new ResponseToStarshipResponseConverter()
  ) {
    this._gateway = gateway;
    this._converter = converter;
  }

  async fetch(page) {
    const response = await this._gateway.fetchStarships(page);
    return this._converter.convert(response);
  }
}
