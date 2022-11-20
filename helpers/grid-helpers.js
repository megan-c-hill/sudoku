import {EMPTY_CELL} from "../enums/cell";

export const isInSameBlock = (rowIndex, columnIndex, cellRowIndex, cellColumnIndex) => {
    const rowsMatch = Math.floor(rowIndex / 3) === Math.floor(cellRowIndex / 3);
    const columnsMatch = Math.floor(columnIndex / 3) === Math.floor(cellColumnIndex / 3);

    return rowsMatch && columnsMatch
}

export const initGrid = (height, width) =>
    Array.from({length: height}).map((row, rowIndex) =>
        Array.from({length: width}).map((column, columnIndex) => EMPTY_CELL
        )
    );

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