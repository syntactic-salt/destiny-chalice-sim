import React, { useState, useContext } from 'react';
import styles from './item-to-rune-calc.scss';
import Drawer from '../drawer/drawer';
import ResultsLists from '../results-lists/results-lists';
import itemsModel from '../../models/items';
import intrinsicsModel from '../../models/intrinsics';
import LocalizationsContext from '../../contexts/localizations';

export default function ItemToRuneCalc() {
    const { uiStrings, runeStrings, intrinsicStrings, masterworkStrings, itemStrings, colorStrings } = useContext(LocalizationsContext);
    const [itemId, setItemId] = useState('');
    const [item, setItem] = useState(undefined);
    const [intrinsicId, setIntrinsicId] = useState('');
    const [masterworkId, setMasterworkId] = useState('');
    const [intrinsicOptions, setIntrinsicOptions] = useState([]);
    const [masterworkOptions, setMasterworkOptions] = useState([]);
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const itemOptions = Object.values(itemsModel).sort((item1, item2) => {
        const name1 = itemStrings[item1.id].toLowerCase();
        const name2 = itemStrings[item2.id].toLowerCase();

        if (name1 < name2) {
            return -1;
        }

        if (name1 > name2) {
            return 1;
        }

        return 0;
    }).map(({ id }, index) => {
        return <option key={index} value={id}>{itemStrings[id]}</option>;
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const runeSlotOne = [item.runes[0]];
        let runeSlotTwo = [...item.runes[1]];

        if (intrinsicId) {
            const [intrinsic] = Object.values(intrinsicsModel).filter(intrinsic => intrinsic.id === intrinsicId);
            runeSlotTwo = runeSlotTwo.filter(rune => intrinsic.runes.includes(rune));
        }

        let masterworks = [];
        if (masterworkId) {
            masterworks = item.masterworks.filter(masterwork => masterworkId === masterwork.id);
        }

        let runeSlotThree = masterworks.reduce((accumulator, masterwork) => {
            accumulator.push(...masterwork.runes);
            return accumulator;
        }, []);

        runeSlotTwo.sort((rune1, rune2) => {
            const name1 = runeStrings[rune1.id].toLowerCase().replace(/of|the/g, '').replace(/ {2,}/, ' ');
            const name2 = runeStrings[rune2.id].toLowerCase().replace(/of|the/g, '').replace(/ {2,}/, ' ');

            if (name1 < name2) {
                return -1;
            }

            if (name1 > name2) {
                return 1;
            }

            return 0;
        });
        runeSlotThree.sort((rune1, rune2) => {
            if (colorStrings[rune1.color.id] === colorStrings[rune2.color.id]) {
                const name1 = runeStrings[rune1.id].toLowerCase().replace(/of|the/g, '').replace(/ {2,}/, ' ');
                const name2 = runeStrings[rune2.id].toLowerCase().replace(/of|the/g, '').replace(/ {2,}/, ' ');

                if (name1 < name2) {
                    return -1;
                }

                if (name1 > name2) {
                    return 1;
                }
            }

            if (colorStrings[rune1.color.id] < colorStrings[rune2.color.id]) {
                return -1;
            }

            if (colorStrings[rune1.color.id] > colorStrings[rune2.color.id]) {
                return 1;
            }

            return 0;
        });

        setResults([runeSlotOne, runeSlotTwo, runeSlotThree]);
        setShowResults(true);
    };

    const handleItem = (event) => {
        const selectedItemId = Number(event.target.value);
        setItemId(selectedItemId);

        const [matchedItem] = Object.values(itemsModel).filter(filterItem => filterItem.id === selectedItemId);
        const intrinsics = matchedItem.intrinsics.sort((intrinsic1, intrinsic2) => {
            const name1 = intrinsicStrings[intrinsic1.id].toLowerCase();
            const name2 = intrinsicStrings[intrinsic2.id].toLowerCase();

            if (name1 < name2) {
                return -1;
            }

            if (name1 > name2) {
                return 1;
            }

            return 0;
        }).map(({ id }, index) => {
            return <option key={index} value={id}>{intrinsicStrings[id]}</option>;
        });

        if (intrinsics.length === 0) {
            setIntrinsicId('');
        }

        const masterworks = matchedItem.masterworks.sort((masterwork1, masterwork2) => {
            const name1 = masterworkStrings[masterwork1.id].toLowerCase();
            const name2 = masterworkStrings[masterwork2.id].toLowerCase();

            if (name1 < name2) {
                return -1;
            }

            if (name1 > name2) {
                return 1;
            }

            return 0;
        }).map(({ id }, index) => {
            return <option key={index} value={id}>{masterworkStrings[id]}</option>;
        });

        setItem(matchedItem);
        setIntrinsicOptions(intrinsics);
        setMasterworkOptions(masterworks);
    };

    const handleIntrinsic = (event) => {
        setIntrinsicId(Number(event.target.value));
    };

    const handleMasterwork = (event) => {
        setMasterworkId(Number(event.target.value));
    };

    const handleClose = () => {
        setShowResults(false);
    };

    return (
        <section className={styles.calculator}>
            <h2 className={styles.calculatorHeading}>{uiStrings.chaliceCalcHeading}</h2>
            <form className={styles.calculatorForm} onSubmit={handleSubmit}>
                <fieldset>
                    <div className={styles.calculatorFieldGroup}>
                        <div className={styles.calculatorField}>
                            <label className={styles.calculatorFieldLabel} htmlFor='item'>{uiStrings.item}</label>
                            <select className={styles.calculatorFieldPicker}
                                    onChange={handleItem}
                                    value={itemId}
                                    id='item'
                                    name='item'
                                    required>
                                <option value="">{uiStrings.chooseAnItem}</option>
                                {itemOptions}
                            </select>
                        </div>
                        <div className={styles.calculatorField}>
                            <label className={styles.calculatorFieldLabel} htmlFor='intrinsic'>{uiStrings.intrinsic}</label>
                            <select className={styles.calculatorFieldPicker}
                                    onChange={handleIntrinsic}
                                    value={intrinsicId}
                                    id='intrinsic'
                                    name='intrinsic'
                                    disabled={!intrinsicOptions.length}>
                                <option value="">{uiStrings.random}</option>
                                {intrinsicOptions}
                            </select>
                        </div>
                        <div className={styles.calculatorField}>
                            <label className={styles.calculatorFieldLabel} htmlFor='masterwork'>{uiStrings.masterwork}</label>
                            <select className={styles.calculatorFieldPicker}
                                    onChange={handleMasterwork}
                                    value={masterworkId}
                                    id='masterwork'
                                    name='masterwork'
                                    disabled={masterworkOptions.length === 0}>
                                <option value="">{uiStrings.random}</option>
                                {masterworkOptions}
                            </select>
                        </div>
                    </div>
                </fieldset>
                <button type={'submit'} className={styles.calculatorTrigger} disabled={!itemId}>{uiStrings.findRunes}</button>
            </form>
            <Drawer onClose={handleClose} isOpen={showResults}>
                <ResultsLists headings={[uiStrings.rune1, uiStrings.rune2, uiStrings.rune3]} lists={results} />
            </Drawer>
        </section>
    );
}
