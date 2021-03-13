class Starship {
  constructor({ id, name, model, manufacturer, passengers, shipClass }) {
    this._id = id;
    this._name = name;
    this._model = model;
    this._manufacturer = manufacturer;
    this._passengers = passengers;
    this._shipClass = shipClass;
    this._isVisible = true;
  }

  get id() {
    return this._id;
  }

  get isNotVisible() {
    return !this._isVisible;
  }

  set visibility(visibility) {
    this._isVisible = visibility;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get model() {
    return this._model;
  }

  set model(model) {
    this._model = model;
  }

  get manufacturer() {
    return this._manufacturer;
  }

  set manufacturer(manufacturer) {
    this._manufacturer = manufacturer;
  }

  get passengers() {
    return this._passengers;
  }

  set passengers(passengers) {
    this._passengers = passengers;
  }

  get shipClass() {
    return this._shipClass;
  }

  set shipClass(shipClass) {
    this._shipClass = shipClass;
  }
}
