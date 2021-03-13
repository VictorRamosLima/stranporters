class StarshipPage {
  constructor({ count, next, previous, starships }) {
    this._count = count;
    this._next = next;
    this._previous = previous;
    this._starships = starships;
  }

  get count() {
    return this._count;
  }

  get previous() {
    return this._previous;
  }

  get next() {
    return this._next;
  }

  get starships() {
    return [...this._starships];
  }

  set starships(starships) {
    this._starships = starships;
  }

  findById(id) {
    return this._starships.find(starship => starship.id === id);
  }

  findIndexById(id) {
    return this._starships.findIndex(starship => starship.id === id);
  }
}
