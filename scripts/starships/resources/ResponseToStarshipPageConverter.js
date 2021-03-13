class ResponseToStarshipPageConverter {
  convert(response) {
    const { count, next, previous, results } = response;
  
    const nextPage = this._convertPointer(next);
    const previousPage = this._convertPointer(previous);
    const multiplier = nextPage - 1 === 1 ? 0 : nextPage - 1;

    const starships = this._convertResults(multiplier, results);

    return new StarshipPage({
      count,
      next: nextPage,
      previous: previousPage,
      starships,
    });
  }

  _convertPointer(pointer) {
    if (this._isValidUrl(pointer)) {
      const url = new URL(pointer);
      return Number(url.searchParams.get('page'));
    }

    return 0;
  }

  _convertResults(multiplier, results) {
    return results.map((result, index) => {
      const {
        name,
        model,
        manufacturer,
        passengers,
        starship_class: shipClass,
      } = result;

      return new Starship({
        id: (multiplier * 10) + index + 1,
        name,
        model,
        manufacturer,
        passengers: passengers.replace(',', '.').toUpperCase(),
        shipClass,
      });
    });
  }

  _isValidUrl(text) {    
    try {
      new URL(text);
      return true;
    } catch {
      return false;  
    }
  }
}
