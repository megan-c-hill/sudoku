export const isInSameBlock = (rowIndex, columnIndex, cellRowIndex, cellColumnIndex) => {
    const rowsMatch = Math.floor(rowIndex / 3) === Math.floor(cellRowIndex / 3);
    const columnsMatch = Math.floor(columnIndex / 3) === Math.floor(cellColumnIndex / 3);

    return rowsMatch && columnsMatch
}

export const computeHintsForCell = (grid, cell, cellRowIndex, cellColumnIndex) => {
    if(cell.setNumber !== -1 || cell.guessNumber !== -1) {
        return [];
    }

    let possibleHints = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    grid.map((row, rowIndex) =>
        row.map((cell, columnIndex) => {
            if(rowIndex === cellRowIndex || columnIndex === cellColumnIndex || isInSameBlock(rowIndex, columnIndex, cellRowIndex, cellColumnIndex)) { // also check blocks here
                const indexInArray = possibleHints.indexOf(Math.max(cell.setNumber, cell.guessNumber));

                if(indexInArray !== -1) {
                    possibleHints.splice(indexInArray, 1);
                }
            }
        })
    )

    return possibleHints;
}

export const fillInHints = (grid, setGrid) => {
    const newGrid = grid.map((row, rowIndex) =>
        row.map((cell, columnIndex) => ({
                ...cell,
                hints: computeHintsForCell(grid, cell, rowIndex, columnIndex)
            })
        )
    );

    setGrid(newGrid);
}