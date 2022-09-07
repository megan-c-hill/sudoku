import styles from '../styles/hint-cell.module.css';

const ALL_AVAILABLE_HINTS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const HintCell = ({hints}) => {
    return (
        <div className={styles.hintCell}>
            {ALL_AVAILABLE_HINTS.map((hint) => (
                <div className={styles.individualHint}>
                    {hints.includes(hint) ? hint : ' '}
                </div>
            ))}
        </div>
    );
}
