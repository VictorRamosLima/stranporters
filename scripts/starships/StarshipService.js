class StarshipService {
  constructor(
    gateway = new StarshipGateway(),
    converter = new ResponseToStarshipPageConverter()
  ) {
    this._gateway = gateway;
    this._converter = converter;
  }

  async fetch(page) {
    const response = await this._gateway.fetchStarships(page);

    if (response.detail) throw new Error("Não foi possível carregar a listagem de naves.");

    return this._converter.convert(response);
  }
}
