class StarshipController {
  constructor(service = new StarshipService()) {
    this.service = service;
  }

  async index(context, pageNumber) {
    try {
      const page = await this.service.fetch(pageNumber <= 0 ? 1 : pageNumber);

      IndexView.render(page);

      context.page = page;
    } catch (error) {
      document.querySelector('#js-table-body').textContent = error.message;
    }
  }

  update(page, id, newStarship) {
    const index = page.findIndexById(id);
    const starships = page.starships;
    const starship = starships[index];

    this._completeNullValues(newStarship, starship);

    starships[index] = newStarship;
    page.starships = starships;

    IndexView.render(page);
  }

  delete(page, id) {
    const starship = page.findById(id);

    starship.visibility = false;

    IndexView.render(page);
  }

  _completeNullValues(newStarship, starship) {
    newStarship.name = (newStarship.name === '') ? starship.name : newStarship.name;
    newStarship.model = (newStarship.model === '') ? starship.model : newStarship.model;
    newStarship.passengers = (newStarship.passengers === '') ? starship.passengers : newStarship.passengers;
    newStarship.manufacturer = (newStarship.manufacturer === '') ? starship.manufacturer : newStarship.manufacturer;
    newStarship.shipClass = (newStarship.shipClass === '') ? starship.shipClass : newStarship.shipClass;
  }
}
