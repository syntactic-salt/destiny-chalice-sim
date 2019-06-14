import React from 'react';
import styles from './results-table.scss';

export default function ResultsTable({headings, results}) {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {headings.map((heading, index) => {
                        return <th key={index} className={`${styles.tableCell} ${styles.tableHeading}`}>{heading}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {results.map((row, rowIndex) => {
                    const cells = [];

                    for (let columnIndex = 0; columnIndex < row.length; columnIndex += 1) {
                        cells.push(<td key={columnIndex} className={styles.tableCell}>{row[columnIndex]}</td>)
                    }

                    return <tr key={rowIndex} className={styles.tableRow}>{cells}</tr>;
                })}
            </tbody>
        </table>
    );
};
