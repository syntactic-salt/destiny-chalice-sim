import React, { useContext, useState, useEffect } from 'react';
import styles from './settings.scss';
import GenericWrapper from '../generic-wrapper/generic-wrapper';
import LocationsContext from '../../contexts/localizations';
import LocalizationService from '../../services/localization-service';
import availableLanguages from '../../models/available-languages';

const Settings = () => {
    const { uiStrings, updateLocalizations } = useContext(LocationsContext);
    const storedLangCode = localStorage.getItem('languageCode');
    const [languageCode, setLanguageCode] = useState(storedLangCode ? storedLangCode : 'en');
    const handleChange = (event) => {
        const code = event.target.value;
        setLanguageCode(code);
        document.documentElement.lang = code;
        localStorage.setItem('languageCode', code);
        LocalizationService.getLocalizations(code, true)
            .then(localizations => updateLocalizations(localizations));
    };

    useEffect(() => {
        document.title = `${uiStrings.siteHeading} - ${uiStrings.settingsTitle}`;
    }, []);

    return (
        <GenericWrapper>
            <h2>{uiStrings.settingsHeading}</h2>
            <form>
                <div className={styles.settingsField}>
                    <label className={styles.settingsLabel} htmlFor='language'>{uiStrings.defaultLanguage}</label>
                    <select value={languageCode}
                            id='language'
                            name='language'
                            onChange={handleChange}
                            className={styles.settingsOptions}>
                        {Object.entries(availableLanguages).sort((lang1, lang2) => {
                            if (lang1[1] < lang2[1]) {
                                return -1;
                            }

                            if (lang1[1] > lang2[1]) {
                                return 1;
                            }

                            return 0;
                        }).map(([langCode, langText], index) => {
                            return <option key={index} value={langCode}>{langText}</option>;
                        })}
                    </select>
                </div>
            </form>
        </GenericWrapper>
    );
};

export default Settings;
