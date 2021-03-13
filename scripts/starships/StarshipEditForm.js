class StarshipEditForm {
  constructor() {
    const starshipNameInput = document.querySelector('#js-starship-name');
    const starshipModelInput = document.querySelector('#js-starship-model');
    const starshipPassengersInput = document.querySelector('#js-starship-capacity');
    const starshipManufacturerInput = document.querySelector('#js-starship-manufacturer');
    const starshipClassInput = document.querySelector('#js-starship-class');
    const starshipIdInput = document.querySelector('#js-starship-id');
 
    this.formFields = {
      starshipNameInput,
      starshipModelInput,
      starshipPassengersInput,
      starshipManufacturerInput,
      starshipClassInput,
      starshipIdInput,
    };
  }

  mountEditFormFrom(starship) {
    this.formFields.starshipNameInput.value = starship.name;
    this.formFields.starshipModelInput.value = starship.model;
    this.formFields.starshipPassengersInput.value = starship.passengers;
    this.formFields.starshipManufacturerInput.value = starship.manufacturer;
    this.formFields.starshipClassInput.value = starship.shipClass;
    this.formFields.starshipIdInput.value = starship.id;
  }

  mountStarship() {
    const name = this.formFields.starshipNameInput.value;
    const model = this.formFields.starshipModelInput.value;
    const passengers = this.formFields.starshipPassengersInput.value;
    const manufacturer = this.formFields.starshipManufacturerInput.value;
    const shipClass = this.formFields.starshipClassInput.value;
    const id = Number(this.formFields.starshipIdInput.value);
  
    return new Starship({
      name,
      model,
      passengers,
      manufacturer,
      shipClass,
      id,
    });
  }
}
