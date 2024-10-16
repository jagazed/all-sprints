export class GridView {
    render(settings) {
        const gridElement = document.createElement('table')

            for (let y = 0; y < settings.gridSize.columnsCount; y++) {
                const rowElement = document.createElement('tr')
                for (let x = 0; x < settings.gridSize.rowsCount; x++) {
                    const cellElement = document.createElement('td')
                    cellElement.append(x + ',' + y)
                    rowElement.append(cellElement)
                }
                gridElement.append(rowElement)
            }
        return gridElement
    }
}