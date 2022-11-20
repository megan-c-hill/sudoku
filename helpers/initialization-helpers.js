import {EMPTY_CELL} from "../enums/cell";

export const initGrid = (height, width) =>
    Array.from({length: height}).map((row, rowIndex) =>
        Array.from({length: width}).map((column, columnIndex) => EMPTY_CELL
        )
    );