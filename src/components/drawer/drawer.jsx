import React, { useEffect, useRef, useContext } from 'react';
import styles from './drawer.scss';
import LocalizationsContext from '../../contexts/localizations';

export default function Drawer(props) {
    const node = useRef();
    const { uiStrings } = useContext(LocalizationsContext);

    const handleClickOutside = (event) => {
        if (node.current.contains(event.target)) {
            return;
        }

        event.preventDefault();
        props.onClose();
    };

    useEffect(() => {
        if (props.isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    const drawerStyles = () => {
        let classes = styles.drawer;

        if (props.isOpen) {
            classes += ` ${styles.drawerOpen}`;
        }

        return classes;
    };

    return (
        <div className={drawerStyles()} ref={node}>
            <header className={styles.drawerHeader}>
                <h3 className={styles.drawerHeaderHeading}>{uiStrings.drawerHeading}</h3>
                <button className={styles.drawerHeaderButton} onClick={props.onClose}>X</button>
            </header>
            <section className={styles.drawerContent}>{props.children}</section>
        </div>
    );
};
