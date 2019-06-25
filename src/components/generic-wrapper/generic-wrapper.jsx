import React from 'react';
import styles from './generic-wrapper.scss';

const GenericWrapper = (props) => {
    return (
        <article className={styles.wrapper}>
            <div className={styles.wrapperBody}>{props.children}</div>
        </article>
    );
};

export default GenericWrapper;
