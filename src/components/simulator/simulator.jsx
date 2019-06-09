import React from 'react';
import Styles from './simulator.scss';
import Chalice from '../chalice/chalice';
import RunePicker from '../rune-picker/rune-picker';

export default function Simulator() {
    return (
        <React.Fragment>
            {/*<Chalice className={Styles.chalice} />*/}
            <section className={Styles.simulator}>
                <RunePicker className={Styles.simulatorRuneOne} />
                <RunePicker className={Styles.simulatorRuneTwo} />
                <RunePicker className={Styles.simulatorRuneThree} />
            </section>
        </React.Fragment>
    );
}
