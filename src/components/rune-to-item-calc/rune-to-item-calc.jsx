import React, { useState, useContext } from 'react';
import styles from './rune-to-item-calc.scss';
import Drawer from '../drawer/drawer';
import runesModel from '../../models/runes';
import itemsModel from '../../models/items';
import ResultsTable from "../results-table/results-table";
import LocalizationsContext from '../../contexts/localizations';

const runes = Object.values(runesModel);

export default function RuneToItemCalc(props) {
    const { uiStrings, runeStrings, colorStrings, itemStrings, masterworkStrings, intrinsicStrings } = useContext(LocalizationsContext);
    const [runeOne, setRuneOne] = useState('');
    const [runeTwo, setRuneTwo] = useState('');
    const [runeThree, setRuneThree] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    runes.sort((rune1, rune2) => {
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

    const runesByColor = [];
    runesByColor.push(runes.slice(0, 3));
    runesByColor.push(runes.slice(3, 6));
    runesByColor.push(runes.slice(6, 9));
    runesByColor.push(runes.slice(9, 12));

    const optionGroups = runesByColor.map((runesOfColor, index) => {
        const options = runesOfColor.map(({ id }) => {
            return <option key={id} value={id}>{runeStrings[id]}</option>;
        });

        return <optgroup key={index} label={colorStrings[runesOfColor[0].color.id]}>{options}</optgroup>;
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        let filteredItems = Object.values(itemsModel).filter((item) => {
            return item.runes[0].id === runeOne;
        });

        if (runeTwo) {
            filteredItems = filteredItems.filter((item) => {
                return item.runes[1].findIndex(rune => rune.id === runeTwo) !== -1;
            });
        }

        const calcResults = filteredItems.map((item) => {
            const itemName = itemStrings[item.id];
            let intrinsicName = '';
            let masterworkName = uiStrings.random;

            if (item.intrinsics.length) {
                if (runeTwo) {
                    item.intrinsics.forEach((intrinsic) => {
                        if (intrinsic.runes.findIndex(rune => rune.id === runeTwo) !== -1) {
                            intrinsicName = intrinsicStrings[intrinsic.id];
                        }
                    });
                } else {
                    intrinsicName = uiStrings.random;
                }
            }

            if (runeThree) {
                item.masterworks.forEach((masterwork) => {
                    if (masterwork.runes.findIndex(rune => rune.id === runeThree) !== -1) {
                        masterworkName = masterworkStrings[masterwork.id];
                    }
                })
            }

            return [itemName, intrinsicName, masterworkName];
        });

        setResults(calcResults);
        setShowResults(true);
    };

    const handleRuneOne = (event) => {
        setRuneOne(Number(event.target.value));
    };

    const handleRuneTwo = (event) => {
        setRuneTwo(Number(event.target.value));
    };

    const handleRuneThree = (event) => {
        setRuneThree(Number(event.target.value));
    };

    const handleClose = () => {
        setShowResults(false);
    };

    return (
        <section className={`${styles.calculator} ${props.className}`}>
            <h2 className={styles.calculatorHeading}>{uiStrings.chaliceCalcHeading}</h2>
            <form className={styles.calculatorForm} onSubmit={handleSubmit}>
                <fieldset>
                    <div className={styles.calculatorFieldGroup}>
                        <div className={styles.calculatorField}>
                            <label className={styles.calculatorFieldLabel}>{uiStrings.rune1}</label>
                            <select className={styles.calculatorFieldPicker}
                                    onChange={handleRuneOne}
                                    value={runeOne}
                                    required>
                                <option value="">{uiStrings.chooseARune}</option>
                                {optionGroups}
                            </select>
                        </div>
                        <div className={styles.calculatorField}>
                            <label className={styles.calculatorFieldLabel}>{uiStrings.rune2}</label>
                            <select className={styles.calculatorFieldPicker}
                                    onChange={handleRuneTwo}
                                    value={runeTwo}
                                    disabled={!runeOne}>
                                <option value="">{uiStrings.empty}</option>
                                {optionGroups}
                            </select>
                        </div>
                        <div className={styles.calculatorField}>
                            <label className={styles.calculatorFieldLabel}>{uiStrings.rune3}</label>
                            <select className={styles.calculatorFieldPicker}
                                    onChange={handleRuneThree}
                                    value={runeThree}
                                    disabled={!runeOne}>
                                <option value="">{uiStrings.empty}</option>
                                {optionGroups}
                            </select>
                        </div>
                    </div>
                </fieldset>
                <button type={'submit'} className={styles.calculatorTrigger} disabled={!runeOne}>{uiStrings.findItems}</button>
            </form>
            <Drawer onClose={handleClose} isOpen={showResults}>
                <ResultsTable headings={[uiStrings.item, uiStrings.intrinsic, uiStrings.masterwork]} results={results} />
            </Drawer>
        </section>
    );
}
