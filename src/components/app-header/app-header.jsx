import React, { useContext } from 'react';
import styles from './app-header.scss';
import Logo from '../logo/logo';
import LocalizationsContext from '../../contexts/localizations';

const AppHeader = React.forwardRef((props, ref) => {
    const { uiStrings } = useContext(LocalizationsContext);
    const handleClick = () => {
        if (props.isMenuOpen) {
            props.onMenuClose();
        } else {
            props.onMenuOpen();
        }
    };

    const buttonStyles = () => {
        const styleList = [
            styles.hamburger,
            styles.hamburgerSpin,
            styles.headerMenuTrigger,
        ];

        if (props.isMenuOpen) {
            styleList.push(styles.isActive, styles.headerMenuTriggerIsActive);
        }

        return styleList.reduce((accumulator, val) => accumulator += ` ${val}`);
    };

    return (
        <header className={styles.header}>
            <button className={buttonStyles()}
                    onClick={handleClick}
                    ref={ref}
                    aria-label={props.isMenuOpen ? uiStrings.closeMenu : uiStrings.openMenu}>
                <span className={styles.hamburgerBox}>
                    <span className={styles.hamburgerInner}/>
                </span>
            </button>
            <h1 className={styles.headerHeading}>{uiStrings.siteHeading}</h1>
            <Logo className={styles.headerLogo}/>
        </header>
    );
});

export default AppHeader;
