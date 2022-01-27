import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {SudokuGrid} from "../components/SudokuGrid";

export const Home = () => (
    <div className={styles.container}>
        <Head>
            <title>Sudoku Solver</title>
            <meta name="description" content="Sudoku Puzzle Solver"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>Sudoku Solver</h1>
            <h2>Enter your Sudoku below then press Solve to solve it</h2>

            <SudokuGrid />

            {/*<div className={styles.buttonRow}>*/}
            {/*    <button>Enter New Puzzle</button>*/}
            {/*    <button>Play New Puzzle</button>*/}
            {/*    <button>Fill in Hints</button>*/}
            {/*    <button>Solve Puzzle</button>*/}
            {/*</div>*/}
        </main>
    </div>
);

export default Home;
