import React, { useState, useContext } from 'react';
import styles from './rune-to-item-calc.scss';
import Drawer from '../drawer/drawer';
import runesModel from '../../models/runes';
import itemsModel from '../../models/items';
import itemPossibilityGenerator from '../../services/item-possibility-generator';
import ResultsTable from "../results-table/results-table";
import LocalizationsContext from '../../contexts/localizations';

const runes = Object.values(runesModel);
const possibilities = itemPossibilityGenerator(itemsModel);

export default function RuneToItemCalc(props) {
    const { uiStrings, runeStrings, colorStrings, itemStrings, masterworkStrings, intrinsicStrings } = useContext(LocalizationsContext);
    const [runeOne, setRuneOne] = useState('');
    const [runeTwo, setRuneTwo] = useState('');
    const [runeThree, setRuneThree] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const options = runes.sort((rune1, rune2) => {
        const name1 = runeStrings[rune1.id].toLowerCase().replace(/of|the/g, '').replace(/ {2,}/, ' ');
        const name2 = runeStrings[rune2.id].toLowerCase().replace(/of|the/g, '').replace(/ {2,}/, ' ');

        if (name1 > name2) {
            return 1;
        }

        if (name1 < name2) {
            return -1;
        }

        return 0;
    }).map(({ id, color }, index) => {
        return <option value={id} key={index}>{`${runeStrings[id]} (${colorStrings[color.id]})`}</option>;
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

        console.log(calcResults);

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
            <h2 className={styles.calculatorHeading}>Chalice of Opulence Calculator</h2>
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
                                {options}
                            </select>
                        </div>
                        <div className={styles.calculatorField}>
                            <label className={styles.calculatorFieldLabel}>{uiStrings.rune2}</label>
                            <select className={styles.calculatorFieldPicker}
                                    onChange={handleRuneTwo}
                                    value={runeTwo}
                                    disabled={!runeOne}>
                                <option value="">{uiStrings.empty}</option>
                                {options}
                            </select>
                        </div>
                        <div className={styles.calculatorField}>
                            <label className={styles.calculatorFieldLabel}>{uiStrings.rune3}</label>
                            <select className={styles.calculatorFieldPicker}
                                    onChange={handleRuneThree}
                                    value={runeThree}
                                    disabled={!runeOne}>
                                <option value="">{uiStrings.empty}</option>
                                {options}
                            </select>
                        </div>
                    </div>
                </fieldset>
                <button type={'submit'} className={styles.calculatorTrigger} disabled={!runeOne}>{uiStrings.findItems}</button>
            </form>
            <Drawer onClose={handleClose} isOpen={showResults}>
                <ResultsTable headings={['Item', 'Intrinsic', 'Masterwork']} results={results} />
            </Drawer>
        </section>
    );
}
