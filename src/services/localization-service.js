const defaultLanguage = 'en';
const fetchLocalization = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    resolve(response.json());
                } else {
                    reject();
                }
            });
    });
};

let uiStrings;
let runeStrings;
let colorStrings;
let itemStrings;
let masterworkStrings;
let intrinsicStrings;

class LocalizationService {
    static getLocalizations(language = defaultLanguage, refresh = false) {
        if (refresh) {
            uiStrings = null;
            runeStrings = null;
            colorStrings = null;
            itemStrings = null;
            masterworkStrings = null;
            intrinsicStrings = null;
        }

        return Promise.all([
            LocalizationService.getUIStrings(language),
            LocalizationService.getColorStrings(language),
            LocalizationService.getRuneStrings(language),
            LocalizationService.getItemStrings(language),
            LocalizationService.getMasterworkStrings(language),
            LocalizationService.getInstrinsicStrings(language),
        ])
            .then(() => {
                return {
                    uiStrings,
                    colorStrings,
                    runeStrings,
                    itemStrings,
                    masterworkStrings,
                    intrinsicStrings,
                };
            });
    }

    static getUIStrings(language = defaultLanguage) {
        return new Promise((resolve, reject) => {
            if (uiStrings) {
                resolve(uiStrings);
            } else {
                fetchLocalization(`/content/${language}/ui-strings.json`)
                    .then((localization) => {
                        uiStrings = localization;
                        resolve(uiStrings);
                    })
                    .catch(reject);
            }
        });
    }

    static getItemStrings(language = defaultLanguage) {
        return new Promise((resolve, reject) => {
            if (itemStrings) {
                resolve(itemStrings);
            } else {
                fetchLocalization(`/content/${language}/items.json`)
                    .then((localization) => {
                        itemStrings = localization;
                        resolve(itemStrings);
                    })
                    .catch(reject);
            }
        });
    }

    static getMasterworkStrings(language = defaultLanguage) {
        return new Promise((resolve, reject) => {
            if (masterworkStrings) {
                resolve(masterworkStrings);
            } else {
                fetchLocalization(`/content/${language}/masterworks.json`)
                    .then((localization) => {
                        masterworkStrings = localization;
                        resolve(masterworkStrings);
                    })
                    .catch(reject);
            }
        });
    }

    static getColorStrings(language = defaultLanguage) {
        return new Promise((resolve, reject) => {
            if (colorStrings) {
                resolve(colorStrings);
            } else {
                fetchLocalization(`/content/${language}/colors.json`)
                    .then((localization) => {
                        colorStrings = localization;
                        resolve(colorStrings);
                    })
                    .catch(reject);
            }
        });
    }

    static getInstrinsicStrings(language = defaultLanguage) {
        return new Promise((resolve, reject) => {
            if (intrinsicStrings) {
                resolve(intrinsicStrings);
            } else {
                fetchLocalization(`/content/${language}/intrinsics.json`)
                    .then((localization) => {
                        intrinsicStrings = localization;
                        resolve(intrinsicStrings);
                    })
                    .catch(reject);
            }
        });
    }

    static getRuneStrings(language = defaultLanguage) {
        return new Promise((resolve, reject) => {
            if (runeStrings) {
                resolve(runeStrings);
            } else {
                fetchLocalization(`/content/${language}/runes.json`)
                    .then((localization) => {
                        runeStrings = localization;
                        resolve(runeStrings);
                    })
                    .catch(reject);
            }
        });
    }
}

export default LocalizationService;
