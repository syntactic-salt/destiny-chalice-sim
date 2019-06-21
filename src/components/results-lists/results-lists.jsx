import React from 'react';
import styles from './results-lists.scss';

export default function ResultsLists(props) {
    return (
        <div className={styles.results}>
            {props.lists.map((list, index) => {
                const listItems = [];

                for (let listIndex = 0; listIndex < list.length; listIndex += 1) {
                    let classNames = styles.resultsListItem;
                    const { name, color } = list[listIndex];

                    if (color) {
                        console.log(`resultsListItem${color}`);
                        classNames += ` ${styles[`resultsListItem${color}`]}`;
                    }

                    listItems.push(<li className={classNames} key={listIndex}>{name}</li>);
                }

                return (
                    <section key={index} className={styles.resultsSection}>
                        {props.headings[index] && <h3 className={styles.resultsListHeading}>{props.headings[index]}</h3>}
                        <ul className={styles.resultsList}>{listItems}</ul>
                    </section>
                );
            })}
        </div>
    );
};
