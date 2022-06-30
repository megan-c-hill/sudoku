import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {SudokuGrid} from "../components/SudokuGrid";
import {useState} from "react";

export const Home = () => {
    const [gridIsFinalized, setGridIsFinalized] = useState(false);

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

                <SudokuGrid gridIsFinalized={gridIsFinalized}/>

                <div className={styles.buttonRow}>
                    <button disabled={gridIsFinalized} onClick={() => setGridIsFinalized(true)}>Finalize Your Grid</button>
                    <button disabled={!gridIsFinalized}>Fill in Hints</button>
                    <button disabled={!gridIsFinalized}>Solve Puzzle</button>
                </div>
            </main>
        </div>
    );
}

export default Home;
