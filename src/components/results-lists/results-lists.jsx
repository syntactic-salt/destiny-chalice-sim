import React from 'react';
import styles from './results-lists.scss';

export default function ResultsLists(props) {
    return (
        <div className={styles.results}>
            {props.lists.map((list, index) => {
                const listItems = [];

                for (let listIndex = 0; listIndex < list.length; listIndex += 1) {
                    listItems.push(<li className={styles.resultsListItem} key={listIndex}>{list[listIndex]}</li>);
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
