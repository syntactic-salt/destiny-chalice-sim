import React, { useContext } from 'react';
import styles from './results-lists.scss';
import LocalizationsContext from '../../contexts/localizations';

export default function ResultsLists(props) {
    const { runeStrings } = useContext(LocalizationsContext);

    return (
        <div className={styles.results}>
            {props.lists.map((list, index) => {
                const listItems = [];

                for (let listIndex = 0; listIndex < list.length; listIndex += 1) {
                    let classNames = styles.resultsListItem;
                    const { id, color } = list[listIndex];

                    if (color) {
                        classNames += ` ${styles[`resultsListItem${color.id}`]}`;
                    }

                    listItems.push(<li className={classNames} key={listIndex}>{runeStrings[id]}</li>);
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
