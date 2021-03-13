class StarshipController {
  constructor(
    service = new StarshipService(),
    context = new StarshipContext()
  ) {
    this.service = service;
    this.context = context;
  }

  async index(pageNumber = 1) {
    const page = await this.service.fetch(pageNumber <= 0 ? 1 : pageNumber);

    IndexView.render(page);

    this.context.page = page;
  }

  update({ id, params }) {
    const page = this.context.page;

    const index = page.starships.findIndex(starship => starship === id);
    const starship = page.starships[index];
  
    starship.name ??= params.name;
    starship.model ??= params.model;
    starship.manufacturer ??= params.manufacturer;
    starship.passengers ??= params.passengers;
    starship.shipClass ??= params.shipClass;

    starshipResponse.starships[index] = starship;

    IndexView.render(page);

    this.context.page = page;
  }

  delete(id) {
    const page = this.context.page;

    const starship = page.starships.find(
      starship => starship.id === id
    );

    starship.visibility = false;

    IndexView.render(page);

    this.context.page = page;
  }
}
