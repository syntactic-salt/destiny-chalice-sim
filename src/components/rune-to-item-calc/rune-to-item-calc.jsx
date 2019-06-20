import React, { useState } from 'react';
import styles from './rune-to-item-calc.scss';
import Drawer from '../drawer/drawer';
import runesModel from '../../models/runes';
import itemsModel from '../../models/items';
import itemPossibilityGenerator from '../../services/item-possibility-generator';
import ResultsTable from "../results-table/results-table";

const runeLabel = 'Rune';
const runes = Object.values(runesModel);
const possibilities = itemPossibilityGenerator(itemsModel);
const options = runes.sort((val1, val2) => {
    const name1 = val1.name.toLowerCase().replace(/of|the/g, '').replace(/ {2,}/, ' ');
    const name2 = val2.name.toLowerCase().replace(/of|the/g, '').replace(/ {2,}/, ' ');

    if (name1 > name2) {
        return 1;
    }

    if (name1 < name2) {
        return -1;
    }

    return 0;
}).map(({ id, color, name }, index) => {
    return <option value={id} key={index}>{`${name} (${color})`}</option>;
});

export default function RuneToItemCalc(props) {
    const [runeOne, setRuneOne] = useState('');
    const [runeTwo, setRuneTwo] = useState('');
    const [runeThree, setRuneThree] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const key = [runeOne];

        if (runeTwo) {
            key.push(runeTwo);
        }

        if (runeThree) {
            key.push(runeThree);
        }

        const resultsPossibilities = possibilities[key.toString()].reduce((accumulator, possibility) => {
            accumulator.push([possibility.name, possibility.intrinsic, possibility.masterwork]);
            return accumulator;
        }, []);

        setResults(resultsPossibilities);
        setShowResults(true);
    };

    const handleRuneOne = (event) => {
        setRuneOne(event.target.value);
    };

    const handleRuneTwo = (event) => {
        setRuneTwo(event.target.value);
    };

    const handleRuneThree = (event) => {
        setRuneThree(event.target.value);
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
                            <label className={styles.calculatorFieldLabel}>{`${runeLabel} I`}</label>
                            <select className={styles.calculatorFieldPicker}
                                    onChange={handleRuneOne}
                                    value={runeOne}
                                    required>
                                <option value="">Choose a Rune</option>
                                {options}
                            </select>
                        </div>
                        <div className={styles.calculatorField}>
                            <label className={styles.calculatorFieldLabel}>{`${runeLabel} II`}</label>
                            <select className={styles.calculatorFieldPicker}
                                    onChange={handleRuneTwo}
                                    value={runeTwo}
                                    disabled={!runeOne}>
                                <option value="">Empty</option>
                                {options}
                            </select>
                        </div>
                        <div className={styles.calculatorField}>
                            <label className={styles.calculatorFieldLabel}>{`${runeLabel} III`}</label>
                            <select className={styles.calculatorFieldPicker}
                                    onChange={handleRuneThree}
                                    value={runeThree}
                                    disabled={!runeOne}>
                                <option value="">Empty</option>
                                {options}
                            </select>
                        </div>
                    </div>
                </fieldset>
                <button type={'submit'} className={styles.calculatorTrigger} disabled={!runeOne}>Find Items</button>
            </form>
            <Drawer onClose={handleClose} isOpen={showResults}>
                <ResultsTable headings={['Item', 'Intrinsic', 'Masterwork']} results={results} />
            </Drawer>
        </section>
    );
}
