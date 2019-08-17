import React, { useContext, useEffect } from 'react';
import GenericWrapper from '../generic-wrapper/generic-wrapper';
import LocalizationsContext from '../../contexts/localizations';

export default function About() {
    const { uiStrings } = useContext(LocalizationsContext);

    useEffect(() => {
        document.title = `${uiStrings.siteHeading} - ${uiStrings.aboutTitle}`;
    });

    return (
        <GenericWrapper>
            <h2>{uiStrings.aboutHeading}</h2>
            <p>{uiStrings.aboutParagraph}</p>
        </GenericWrapper>
    );
};
