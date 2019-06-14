import React from 'react';
import styles from './app-header.scss';

export default function AppHeader() {
    return (
        <header className={styles.header}>
            <h1 className={styles.headerHeading}>Chalice of Opulence Calculator</h1>
        </header>
    );
};
