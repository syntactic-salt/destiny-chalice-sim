import React from 'react';
import Styles from './rune-picker.scss';

export default function RunePicker(props) {
    return (
        <div className={`${props.className} ${Styles.runePicker}`}>Choose a Rune</div>
    );
}
