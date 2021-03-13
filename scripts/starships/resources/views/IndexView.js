class IndexView {
  constructor(controller) {
    this._controller = controller;
  }

  render(response) {
    this._response = response;
    const tableBody = document.querySelector('#js-table-body');
    const tableFooter = document.querySelector('#js-table-footer');

    const tableRows = this._response.starships.map(
      starship => this._generateTableRow(starship)
    );

    tableBody.innerHTML = '';
    tableRows.forEach(tableRow => tableBody.appendChild(tableRow));

    tableFooter.appendChild(this._generateTableFooter());
  }

  _generateTableRow(starship) {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = this._generateTableData(starship);

    if (starship.isNotVisible) {
      tableRow.classList.add('js-not-active');
    }

    return tableRow;
  }

  _generateTableData(starship) {
    const tableData = `
      <td class="id">${starship.id}</td>
      <td class="name">${starship.name}</td>
      <td class="model">${starship.model}</td>
      <td class="passengers">${starship.passengers}</td>
      <td class="manufacturer">${starship.manufacturer}</td>
      <td class="ship">${starship.shipClass}</td>
      <td>
        <button>Editar</button>
      </td>
      <td>
        <button class="js-delete-button">Excluir</button>
      </td>
    `;

    return tableData;
  }

  _generateTableFooter() {
    const tableRow = document.createElement('tr');
    tableRow.setAttribute('colspan', '8');

    tableRow.innerHTML = `
      <tr colspan="8">
        <button ${(this._response.previous <= 0) ? 'disabled' : ''}">
          Anterior
        </button>
        <button ${(this._response.next <= 0) ? 'disabled' : ''}">
          Próximo
        </button>
      </tr>
    `;

    return tableRow;
  }
}
