(async () => {
  const controller = new StarshipController();
  await controller.index();

  document.querySelector('#js-table-body').addEventListener('click', event => {
    event.stopPropagation();

    const target = event.target;

    const isDeleteButton = target.classList.contains('js-delete-button');
    const isEditButton = target.classList.contains('js-open-edit-button');

    if (isDeleteButton) {
      const parent = target.parentNode.parentNode;
      const idElement = parent.querySelector('.id');

      controller.delete(Number(idElement.innerText));
    }
  });

  document.querySelector('#js-table-footer').addEventListener('click', event => {
    event.stopPropagation();

    const target = event.target;

    const isDeleteButton = target.classList.contains('js-delete-button');
    const isEditButton = target.classList.contains('js-open-edit-button');

    if (isDeleteButton) {
      const parent = target.parentNode.parentNode;
      const idElement = parent.querySelector('.id');

      controller.delete(Number(idElement.innerText));
    }
  });
})();
