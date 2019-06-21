import React, { useState } from 'react';
import styles from './item-to-rune-calc.scss';
import Drawer from '../drawer/drawer';
import ResultsLists from '../results-lists/results-lists';
import itemsModel from '../../models/items';
import intrinsicsModel from '../../models/intrinsics';

const nameSort = (val1, val2) => {
    const name1 = val1.name.toLowerCase();
    const name2 = val2.name.toLowerCase();

    if (name1 > name2) {
        return 1;
    }

    if (name1 < name2) {
        return -1;
    }

    return 0;
};

const itemOptions = Object.values(itemsModel).sort(nameSort).map(({ id, name }, index) => {
    return <option key={index} value={id}>{name}</option>;
});

export default function ItemToRuneCalc() {
    const [itemId, setItemId] = useState('');
    const [item, setItem] = useState(undefined);
    const [intrinsicId, setIntrinsicId] = useState('');
    const [masterworkId, setMasterworkId] = useState('');
    const [intrinsicOptions, setIntrinsicOptions] = useState([]);
    const [masterworkOptions, setMasterworkOptions] = useState([]);
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

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

        if (runeSlotThree.length === 0) {
            runeSlotThree = [{ name: 'Empty' }];
        }

        runeSlotTwo.sort((rune1, rune2) => {
            const name1 = rune1.name.toLowerCase().replace(/of|the/g, '').replace(/ {2,}/, ' ');
            const name2 = rune2.name.toLowerCase().replace(/of|the/g, '').replace(/ {2,}/, ' ');

            if (name1 < name2) {
                return -1;
            }

            if (name1 > name2) {
                return 1;
            }

            return 0;
        });
        runeSlotThree.sort((rune1, rune2) => {
            if (rune1.color === rune2.color) {
                const name1 = rune1.name.toLowerCase().replace(/of|the/g, '').replace(/ {2,}/, ' ');
                const name2 = rune2.name.toLowerCase().replace(/of|the/g, '').replace(/ {2,}/, ' ');

                if (name1 < name2) {
                    return -1;
                }

                if (name1 > name2) {
                    return 1;
                }
            }

            if (rune1.color < rune2.color) {
                return -1;
            }

            if (rune1.color > rune2.color) {
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
        const intrinsics = matchedItem.intrinsics.sort(nameSort).map(({ id, name }, index) => {
            return <option key={index} value={id}>{name}</option>;
        });

        const masterworks = matchedItem.masterworks.sort(nameSort).map(({ id, name }, index) => {
            return <option key={index} value={id}>{name}</option>;
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
            <h2 className={styles.calculatorHeading}>Chalice of Opulence Calculator</h2>
            <form className={styles.calculatorForm} onSubmit={handleSubmit}>
                <fieldset>
                    <div className={styles.calculatorFieldGroup}>
                        <div className={styles.calculatorField}>
                            <label className={styles.calculatorFieldLabel}>Item</label>
                            <select className={styles.calculatorFieldPicker}
                                    onChange={handleItem}
                                    value={itemId}
                                    required>f
                                <option value="">Choose an Item</option>
                                {itemOptions}
                            </select>
                        </div>
                        <div className={styles.calculatorField}>
                            <label className={styles.calculatorFieldLabel}>Intrinsic</label>
                            <select className={styles.calculatorFieldPicker}
                                    onChange={handleIntrinsic}
                                    value={intrinsicId}
                                    disabled={!intrinsicOptions.length}>
                                <option value="">Random</option>
                                {intrinsicOptions}
                            </select>
                        </div>
                        <div className={styles.calculatorField}>
                            <label className={styles.calculatorFieldLabel}>Masterwork</label>
                            <select className={styles.calculatorFieldPicker}
                                    onChange={handleMasterwork}
                                    value={masterworkId}
                                    disabled={!masterworkOptions.length}>
                                <option value="">Random</option>
                                {masterworkOptions}
                            </select>
                        </div>
                    </div>
                </fieldset>
                <button type={'submit'} className={styles.calculatorTrigger} disabled={!itemId}>Find Runes</button>
            </form>
            <Drawer onClose={handleClose} isOpen={showResults}>
                <ResultsLists headings={['Rune I', 'Rune II', 'Rune III']} lists={results} />
            </Drawer>
        </section>
    );
}
