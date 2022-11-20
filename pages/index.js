import Head from 'next/head'
import {useState} from 'react';

import styles from '../styles/Home.module.css'
import {SudokuGrid} from '../components/SudokuGrid';
import {initGrid} from "../helpers/initialization-helpers";
import {fillInHints} from "../helpers/hint-helpers";

// TO DOs
// 1. Make solve button work
// 2. Allow user to edit hints
// 3. Inform user of errors in the grid
// 4. Tests
// 5. UX Improvements (Mobile Responsiveness, Not allowing invalid inputs, etc)

export const Home = () => {
    const [gridIsFinalized, setGridIsFinalized] = useState(false);
    const [grid, setGrid] = useState(initGrid(9, 9));

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
