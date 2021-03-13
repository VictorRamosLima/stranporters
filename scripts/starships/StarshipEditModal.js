class StarshipEditModal {
  constructor() {
    this.modalClassList = document.querySelector('#js-modal').classList;
  }

  open() {
    this.modalClassList.remove('js-not-active');
  }

  close() {
    this.modalClassList.add('js-not-active');
  }
}
