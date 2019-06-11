import React, { useState } from 'react';
import styles from './simulator.scss';
import runesModel from '../../models/runes';
import itemsModel from '../../models/items';
import itemPossibilityGenerator from '../../services/item-possibility-generator';

export default function Simulator() {
    const [ runeOne, setRuneOne ] = useState(0);
    const [ runeTwo, setRuneTwo ] = useState(0);
    const [ runeThree, setRuneThree ] = useState(0);
    const runeLabel = 'Rune';
    const runes = Object.values(runesModel);
    const possibilities = itemPossibilityGenerator(itemsModel);
    console.log(possibilities);c
    const options = runes.map(({ name }, index) => {
        return <option value={index} key={index}>{name}</option>;
    });

    const handleRuneOne = (event) => {
        setRuneOne(event.target.value);
    };

    const handleRuneTwo = (event) => {
        setRuneTwo(event.target.value);
    };

    const handleRuneThree = (event) => {
        setRuneThree(event.target.value);
    };

    return (
        <section className={styles.simulator}>
            <form className={styles.simulatorForm}>
                <fieldset className={styles.simulatorField}>
                    <label className={styles.simulatorFieldLabel}>{`${runeLabel} I`}</label>
                    <select className={styles.simulatorFieldPicker} onChange={handleRuneOne} value={runeOne}>
                        {options}
                    </select>
                </fieldset>
                <fieldset className={styles.simulatorField}>
                    <label className={styles.simulatorFieldLabel}>{`${runeLabel} II`}</label>
                    <select className={styles.simulatorFieldPicker} onChange={handleRuneTwo} value={runeTwo}>
                        {options}
                    </select>
                </fieldset>
                <fieldset className={styles.simulatorField}>
                    <label className={styles.simulatorFieldLabel}>{`${runeLabel} III`}</label>
                    <select className={styles.simulatorFieldPicker} onChange={handleRuneThree} value={runeThree}>
                        {options}
                    </select>
                </fieldset>
            </form>
        </section>
    );
}
