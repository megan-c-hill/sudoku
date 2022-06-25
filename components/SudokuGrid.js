import React, {useState} from 'react';

import styles from '../styles/sudoku-grid.module.css';

const initGrid = (height, width) =>
    Array.from({length: height}).map((row, rowIndex) =>
        Array.from({length: width}).map((column, columnIndex) => ({
                hints: [],
                setNumber: -1,
                guessNumber: -1,
                active: false
            })
        )
    );

const getClassName = (rowIndex, columnIndex, activeCoords, cell) => {
    let className = `${styles.cellInput}`;

    if(cell.setNumber) {
        className += ` ${styles.cellInputFinalize}`
    }
    if (cell.guessNumber) {
        className += ` ${styles.cellInputGuess}`
    }
    if (cell.hints) {
        className += ` ${styles.cellInputHints}`
    }
    if (activeCoords.x === rowIndex && activeCoords.y === columnIndex) {
        className += ` ${styles.cellInputActive}`
    }
    if (rowIndex % 3 === 0) {
        className += ` ${styles.cellInputTopBorder}`
    }
    if (columnIndex % 3 === 0) {
        className += ` ${styles.cellInputLeftBorder}`
    }
    if (rowIndex % 3 === 2) {
        className += ` ${styles.cellInputBottomBorder}`
    }
    if (columnIndex % 3 === 2) {
        className += ` ${styles.cellInputRightBorder}`
    }

    return className
}

const displayCell = (cell) => {
    if(cell.setNumber !== -1) {
        return cell.setNumber;
    }
    if (cell.guessNumber !== -1) {
        return cell.guessNumber;
    }
    if(cell.hints.length) {
        // return hints
        return 'h';
    }

    return '';

}

export const SudokuGrid = () => {
    const [grid, setGrid] = useState(initGrid(9, 9));
    const [activeCoords, setActiveCoords] = useState({x: -1, y: -1});

    return (
        <div className={styles.table}>
            {
                grid.map((row, rowIndex) => (
                    <div className={styles.row}>
                        {row.map((cell, columnIndex) => (
                            <div
                                className={getClassName(rowIndex, columnIndex, activeCoords, cell)}
                                onClick={() => setActiveCoords({x: rowIndex, y: columnIndex})}
                            >
                                {displayCell(cell)}
                            </div>
                        ))}
                    </div>
                ))
            };
        </div>
    )
}