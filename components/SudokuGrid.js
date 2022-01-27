import styles from '../styles/sudoku-grid.module.css';

const getClassName = (rowIndex, columnIndex) => {
    let className = `${styles.cellInput}`;

    if(rowIndex % 3 === 0) {
        className += ` ${styles.cellInputTopBorder}`
    }
    if(columnIndex % 3 === 0) {
       className += ` ${styles.cellInputLeftBorder}`
    }
    if(rowIndex % 3 === 2) {
        className += ` ${styles.cellInputBottomBorder}`
    }
    if(columnIndex % 3 === 2) {
        className += ` ${styles.cellInputRightBorder}`
    }

    return className
}

const generateGrid = (height, width) =>
    Array.from({length: height}).map((row, rowIndex) => (
        <tr>
            {Array.from({length: width}).map((column, columnIndex) => (
                <input className={getClassName(rowIndex, columnIndex)}/>
            ))}
        </tr>
    ));

export const SudokuGrid = () => (
    <div>
        <table>
            {generateGrid(9, 9)}
        </table>
    </div>
)