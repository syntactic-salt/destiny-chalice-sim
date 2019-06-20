import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './menu.scss';

export default function Menu(props) {
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
                             activeClassName={styles.menuListLinkActive}>Chalice of Opulence Calculator</NavLink>
                </li>
                <li>
                    <NavLink className={styles.menuListLink}
                             exact
                             to='/feedback'
                             activeClassName={styles.menuListLinkActive}>Feedback & Bug Reports</NavLink>
                </li>
                <li>
                    <NavLink className={styles.menuListLink}
                             exact
                             to='/about'
                             activeClassName={styles.menuListLinkActive}>About Tex Mechanica</NavLink>
                </li>
            </ul>
        </nav>
    );
};
