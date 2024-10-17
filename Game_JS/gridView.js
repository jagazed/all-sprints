export class GridView {
    render(viewModel) {
        const gridSize = viewModel.settings.gridSize
        const googlePosition = viewModel.googlePosition

        const gridElement = document.createElement('table')
            for (let y = 0; y < gridSize.columnsCount; y++) {
                const rowElement = document.createElement('tr')
                for (let x = 0; x < gridSize.rowsCount; x++) {
                    const cellElement = document.createElement('td')

                    if (googlePosition.x === x && googlePosition.y === y) {
                        cellElement.append(document.createTextNode('Google'))
                    }
                    //cellElement.append(x + ',' + y)
                    rowElement.append(cellElement)
                }
                gridElement.append(rowElement)
            }
        return gridElement
    }
}