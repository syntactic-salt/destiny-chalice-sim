import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.scss';
import AppHeader from '../app-header/app-header';
import Menu from '../menu/menu';
import CalcGroup from '../calc-group/calc-group';
import About from '../about/about';
import Feedback from '../feedback/feedback';
import LocalizationService from '../../services/localization-service';
import LocalizationsContext, { defaultLocalizations } from '../../contexts/localizations';
import Settings from "../settings/settings";
import availableLanguages from "../../models/available-languages";
import LocalizationAnnouncement from '../../components/localization-announcement/localization-announcement';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [localizations, setLocalizations] = useState(defaultLocalizations);
    const headerNode = useRef();
    const updateLocalizations = (newLocalizations) => {
        setLocalizations(newLocalizations);
    };
    const handleMenuOpen = () => {
        setIsMenuOpen(true);
    };
    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        LocalizationService.getLocalizations()
            .then(updateLocalizations)
            .catch(() => updateLocalizations(defaultLocalizations));
    }, []);

    return (
        <div className={styles.app}>
            <LocalizationsContext.Provider value={{...localizations, updateLocalizations}}>
                <LocalizationAnnouncement/>
                <BrowserRouter>
                    <AppHeader isMenuOpen={isMenuOpen} onMenuClose={handleMenuClose} onMenuOpen={handleMenuOpen} ref={headerNode}/>
                    <div className={styles.appContent}>
                        <Menu isOpen={isMenuOpen} onMenuClose={handleMenuClose} excludeFromClose={[headerNode]}/>
                        <Switch>
                            <Route exact path='/' component={CalcGroup}/>
                            <Route exact path='/feedback' component={Feedback}/>>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/settings' component={Settings}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </LocalizationsContext.Provider>
        </div>
    );
};

let defLangCode;

if (navigator.language) {
    const browserLangCode =  navigator.language.substring(0, 2);

    if (availableLanguages[browserLangCode]) {
        defLangCode = browserLangCode;
    }
}

LocalizationService.getLocalizations(localStorage.getItem('languageCode') || defLangCode)
    .finally(() => {
        ReactDOM.render(<App/>, document.getElementById('appContainer'));
    });
