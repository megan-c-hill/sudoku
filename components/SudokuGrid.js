import React, {useState} from 'react';

import styles from '../styles/sudoku-grid.module.css';

const EMPTY_CELL = {
    hints: [],
    setNumber: -1,
    guessNumber: -1,
    active: false
}

const initGrid = (height, width) =>
    Array.from({length: height}).map((row, rowIndex) =>
        Array.from({length: width}).map((column, columnIndex) => EMPTY_CELL
        )
    );

const getClassName = (rowIndex, columnIndex, activeCoords, cell) => {
    let className = `${styles.cellInput}`;

    if(cell.setNumber !== -1) {
        className += ` ${styles.cellInputFinalize}`
    }
    if (cell.guessNumber !== -1) {
        className += ` ${styles.cellInputGuess}`
    }
    if (cell.hints.length) {
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

const onKeyPress = (event, activeCoords, gridIsFinalized, grid, setGrid) => {
    const parsedNumber = Number.parseInt(event.key)
    if(Number.isNaN(parsedNumber)) {
        return;
    }
    
    if(!gridIsFinalized) {
        setGrid((prevGrid) => {
            const newGrid = [...prevGrid];
            newGrid[activeCoords.x] = [...prevGrid[activeCoords.x]];
            newGrid[activeCoords.x][activeCoords.y] = {
                ...EMPTY_CELL,
                setNumber: parsedNumber
            };
            
            return newGrid
        });
        return;
    }

    setGrid((prevGrid) => {
        const newGrid = [...prevGrid];
        newGrid[activeCoords.x] = [...prevGrid[activeCoords.x]];
        newGrid[activeCoords.x][activeCoords.y] = {
            ...EMPTY_CELL,
            guessNumber: parsedNumber
        };

        return newGrid
    });
}

export const SudokuGrid = ({gridIsFinalized}) => {
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
                                tabIndex={-1}
                                onKeyPress={(event) => onKeyPress(event, activeCoords, gridIsFinalized, grid, setGrid)}
                            >
                                {displayCell(cell)}
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    )
}