import Head from 'next/head'
import {useState} from "react";

import styles from '../styles/Home.module.css'
import {SudokuGrid} from "../components/SudokuGrid";
import {EMPTY_CELL} from '../enums/cell';

const initGrid = (height, width) =>
    Array.from({length: height}).map((row, rowIndex) =>
        Array.from({length: width}).map((column, columnIndex) => EMPTY_CELL
        )
    );

const fillInHints = (grid, setGrid) => {
    const newGrid = grid.map((row, rowIndex) =>
        row.map((cell, columnIndex) => ({
                ...cell,
                hints: [1,3,5,6,7,8]
            })
        )
    );

    setGrid(newGrid);
}

export const Home = () => {
    const [gridIsFinalized, setGridIsFinalized] = useState(false);
    const [grid, setGrid] = useState(initGrid(9, 9));
    
    console.log('grid', grid);

    return (
        <div className={styles.container}>
            <Head>
                <title>Sudoku Solver</title>
                <meta name="description" content="Sudoku Puzzle Solver"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Sudoku Solver</h1>
                <h2>Enter your Sudoku below then press Solve to solve it</h2>

                <SudokuGrid grid={grid} gridIsFinalized={gridIsFinalized} setGrid={setGrid}/>

                <div className={styles.buttonRow}>
                    <button disabled={gridIsFinalized} onClick={() => setGridIsFinalized(true)}>Finalize Your Grid</button>
                    <button disabled={!gridIsFinalized} onClick={() => fillInHints(grid, setGrid)}>Fill in Hints</button>
                    <button disabled={!gridIsFinalized}>Solve Puzzle</button>
                </div>
            </main>
        </div>
    );
}

export default Home;
