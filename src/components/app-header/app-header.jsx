import React from 'react';
import styles from './app-header.scss';
import Logo from '../logo/logo';

const AppHeader = React.forwardRef((props, ref) => {
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
                    ref={ref}>
                <span className={styles.hamburgerBox}>
                    <span className={styles.hamburgerInner}></span>
                </span>
            </button>
            <h1 className={styles.headerHeading}>Tex Mechanica</h1>
            <Logo className={styles.headerLogo}/>
        </header>
    );
});

export default AppHeader;
