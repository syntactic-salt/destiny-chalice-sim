import React, { useContext } from 'react';
import GenericWrapper from '../generic-wrapper/generic-wrapper';
import LocalizationsContext from '../../contexts/localizations';

const Feedback = () => {
    const { uiStrings } = useContext(LocalizationsContext);

    return (
        <GenericWrapper>
            <h2>{uiStrings.feedbackHeading}</h2>
            <p>{uiStrings.feedbackParagraph1} <a href="https://discord.gg/re74rf4" target="_blank">{uiStrings.feedbackParagraph1Link}</a>.</p>
        </GenericWrapper>
    );
};

export default Feedback;


