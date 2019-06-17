import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.scss';
import AppHeader from '../app-header/app-header';
import Menu from '../menu/menu';
import CalcGroup from '../calc-group/calc-group';
import About from '../about/about';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerNode = useRef();
    const handleMenuOpen = () => {
        setIsMenuOpen(true);
    };
    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className={styles.app}>
            <AppHeader isMenuOpen={isMenuOpen} onMenuClose={handleMenuClose} onMenuOpen={handleMenuOpen} ref={headerNode}/>
            <div className={styles.appContent}>
                <Menu isOpen={isMenuOpen} onMenuClose={handleMenuClose} excludeFromClose={[headerNode]}/>
                <Switch>
                    <Route exact path='/' component={CalcGroup}/>
                    <Route path='/about' component={About}/>
                </Switch>
            </div>
        </div>
    );
}

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('appContainer'));
