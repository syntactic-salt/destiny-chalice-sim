import React from 'react';
import uiStrings from '../localizable/ui-strings.json';
import colorStrings from '../localizable/colors.json';
import intrinsicStrings from '../localizable/intrinsics.json';
import itemStrings from '../localizable/items.json';
import masterworkStrings from '../localizable/masterworks.json';
import runeStrings from '../localizable/runes.json'

export const defaultLocalizations = {
    uiStrings,
    colorStrings,
    itemStrings,
    intrinsicStrings,
    masterworkStrings,
    runeStrings,
};

export default React.createContext({
    ...defaultLocalizations,
    updateLocalizations: () => {},
});
