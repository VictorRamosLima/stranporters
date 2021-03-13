class IndexView {
  static render(page) {
    const tableBody = document.querySelector('#js-table-body');
    const tableFooter = document.querySelector('#js-table-footer');

    const tableRows = page.starships.map(
      starship => IndexView._generateTableRow(starship)
    );

    tableBody.innerHTML = '';
    tableFooter.innerHTML = '';

    tableRows.forEach(tableRow => tableBody.appendChild(tableRow));
    tableFooter.appendChild(IndexView._generateTableFooter(page));
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
        <button>Editar</button>
      </td>
      <td>
        <button class="js-delete-button">Excluir</button>
      </td>
    `;

    return tableData;
  }

  static _generateTableFooter(page) {
    const tableRow = document.createElement('tr');
    tableRow.setAttribute('colspan', '8');

    tableRow.innerHTML = `
      <tr colspan="8">
        <button ${(page.previous <= 0) ? 'disabled' : ''}">
          Anterior
        </button>
        <button ${(page.next <= 0) ? 'disabled' : ''}">
          Próximo
        </button>
      </tr>
    `;

    return tableRow;
  }
}
