import React from 'react';
import ReactDOM from 'react-dom';
import styles from './app.scss';
import AppHeader from '../app-header/app-header';
import CalcGroup from '../calc-group/calc-group';

function App() {
    return (
        <div className={styles.app}>
            <AppHeader />
            <CalcGroup />
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('appContainer'));
