const getTableRowId = target => Number(target.parentNode.parentNode.id.split('-')[1]);

const isElement = (target, className) => target.classList.contains(className)

const mountIndex = async (controller, context, pageNumber = 1) => {
  document.querySelector('#js-table-body').textContent = 'Carregando...';
  await controller.index(context, pageNumber);
}

(async () => {
  const context = new StarshipContext();
  const controller = new StarshipController();
  const form = new StarshipEditForm();
  const modal = new StarshipEditModal();

  mountIndex(controller, context);

  document.querySelector('#js-table-body').addEventListener('click', event => {
    event.stopPropagation();

    const target = event.target;

    const isDeleteButton = isElement(target, 'js-delete-button');
    const isEditButton = isElement(target, 'js-open-edit-button');

    if (isDeleteButton) {
      const id = getTableRowId(target);
      controller.delete(context.page, id);
    } else if (isEditButton) {
      const id = getTableRowId(target);
      const starship = context.page.findById(id);

      form.mountEditFormFrom(starship);
      modal.open();
    }
  });

  document.querySelector('#js-action-buttons').addEventListener('click', event => {
    event.stopPropagation();

    const target = event.target;

    const isNextPageButton = isElement(target, 'js-next-button');
    const isPreviousPageButton = isElement(target, 'js-previous-button');

    if (isNextPageButton || isPreviousPageButton) {
      mountIndex(controller, context, Number(target.dataset.pageNumber));
    }
  });

  document.querySelector('#js-close-modal').addEventListener('click', () => modal.close());

  document.querySelector('#js-update-modal').addEventListener('click', () => {
    const starship = form.mountStarship();

    controller.update(context.page, starship.id, starship);

    modal.close();
  })
})();
