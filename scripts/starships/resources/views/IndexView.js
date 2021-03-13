class IndexView {
  static render(page) {
    const tableBody = document.querySelector('#js-table-body');
    const actionButtons = document.querySelector('#js-action-buttons');

    const tableRows = page.starships.map(
      starship => IndexView._generateTableRow(starship)
    );

    tableBody.innerHTML = '';
    actionButtons.innerHTML = '';

    tableRows.forEach(tableRow => tableBody.appendChild(tableRow));
    actionButtons.appendChild(IndexView._generateActionButtons(page));
  }

  static _generateTableRow(starship) {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = IndexView._generateTableData(starship);
    tableRow.setAttribute('id', `starship-${starship.id}`);

    if (starship.isNotVisible) {
      tableRow.classList.add('js-not-active');
    }

    return tableRow;
  }

  static _generateTableData(starship) {
    const tableData = `
      <td class="name">${starship.name}</td>
      <td class="model">${starship.model}</td>
      <td class="passengers">${starship.passengers}</td>
      <td class="manufacturer">${starship.manufacturer}</td>
      <td class="ship">${starship.shipClass}</td>
      <td>
        <button class="action-button edit-button js-open-edit-button">Editar</button>
      </td>
      <td>
        <button class="action-button delete-button js-delete-button">Excluir</button>
      </td>
    `;

    return tableData;
  }

  static _generateActionButtons(page) {
    const div = document.createElement('div');
    div.classList.add('action-buttons');

    div.innerHTML = `
      <button class="action-button js-previous-button ${(page.previous <= 0) ? 'js-disabled-button' : ''}"
        ${(page.previous <= 0) ? '' : `data-page-number="${page.previous}"`}
      >
        Anterior
      </button>

      <button
        class="action-button js-next-button ${(page.next <= 0) ? 'js-disabled-button' : ''}""
        ${(page.next <= 0) ? '' : `data-page-number="${page.next}"`}
      >
        Próximo
      </button>
    `;

    return div;
  }
}
