import React, { useEffect, useRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './menu.scss';
import LocalizationsContext from '../../contexts/localizations';

export default function Menu(props) {
    const { uiStrings } = useContext(LocalizationsContext);
    const navRef = useRef();

    const handleClickOutside = (event) => {
        if (navRef.current.contains(event.target)) {
            return;
        }

        const isExcluded = props.excludeFromClose.reduce((accumulator, excludeNode) => {
            if (accumulator) {
                return accumulator;
            }

            return excludeNode.current.contains(event.target);
        }, false);

        if (isExcluded) {
            return;
        }

        event.preventDefault();
        props.onMenuClose();
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

    const menuStyles = () => {
        const styleList = [styles.menu];

        if (props.isOpen) {
            styleList.push(styles.menuIsOpen);
        }

        return styleList.reduce((accumulator, style) => accumulator += ` ${style}`, '');
    };

    return (
        <nav className={menuStyles()} ref={navRef}>
            <ul className={styles.menuList}>
                <li>
                    <NavLink className={styles.menuListLink}
                             exact
                             to='/'
                             activeClassName={styles.menuListLinkActive}>{uiStrings.chaliceCalcHeading}</NavLink>
                </li>
                <li>
                    <NavLink className={styles.menuListLink}
                             exact
                             to='/feedback'
                             activeClassName={styles.menuListLinkActive}>{uiStrings.feedbackMenuLink}</NavLink>
                </li>
                <li>
                    <NavLink className={styles.menuListLink}
                             exact
                             to='/about'
                             activeClassName={styles.menuListLinkActive}>{uiStrings.aboutMenuLink}</NavLink>
                </li>
                <li>
                    <NavLink className={styles.menuListLink}
                             exact
                             to='/settings'
                             activeClassName={styles.menuListLinkActive}>{uiStrings.settingsMenuLink}</NavLink>
                </li>
            </ul>
        </nav>
    );
};
