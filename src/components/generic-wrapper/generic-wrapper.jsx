import React from 'react';
import styles from './generic-wrapper.scss';

const GenericWrapper = (props) => {
    return (
        <article className={styles.wrapper}>{props.children}</article>
    );
};

export default GenericWrapper;
