class StarshipController {
  constructor(service = new StarshipService()) {
    this._service = service;
    this._view = new IndexView(this);
  }

  async index(page = 1) {
    const starshipResponse = await this._service.fetch(page);

    this._starshipResponse = starshipResponse;

    this._view.render(this._starshipResponse);
  }

  update({ id, params, starshipResponse }) {
    const index = starshipResponse.starships.findIndex(starship => starship === id);
    const starship = starshipResponse.starships[index];
  
    starship.name ??= params.name;
    starship.model ??= params.model;
    starship.manufacturer ??= params.manufacturer;
    starship.passengers ??= params.passengers;
    starship.class ??= params.class;

    starshipResponse.starships[index] = starship;

    this._view.render(this._starshipResponse);
  }

  delete(id) {
    const starship = this._starshipResponse.starships.find(
      starship => starship.id === id
    );

    starship.visibility = false;

    this._view.render(this._starshipResponse);
  }

  get response() {
    return this._starshipResponse;
  }
}
