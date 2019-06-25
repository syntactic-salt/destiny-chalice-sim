import React, { useContext, useRef, useEffect, useState } from 'react';
import styles from './localization-announcement.scss';
import LocalizationsContext from '../../contexts/localizations';

const LocalizationAnnouncement = () => {
    const { uiStrings } = useContext(LocalizationsContext);
    const [isOpen, setIsOpen] = useState(!localStorage.getItem('viewedLocalizationAnnouncement'));
    const node = useRef();

    const handleClick = (event) => {
        event.preventDefault();
        setIsOpen(false);
        localStorage.setItem('viewedLocalizationAnnouncement', true);
    };

    const announcementStyles = () => {
        let styleString = styles.announcement;

        if (!isOpen) {
            styleString += ` ${styles.announcementHide}`;
        }

        return styleString;
    };

    return (
        <aside className={announcementStyles()} onClick={handleClick}>
            <div className={styles.announcementOverlayLeft}/>
            <div className={styles.announcementOverlayRight}/>
            <div className={styles.announcementWindow}/>
            <svg className={styles.announcementArrow} viewBox="0 0 333.557 333.557" xmlns="http://www.w3.org/2000/svg">
		        <path d="m140.19 60.733c-44.676-8.568-86.292-27.54-130.36-36.72-4.284-0.612-10.404 2.448-9.792 7.344 5.508 47.124 22.032 91.8 39.78 135.86 1.836 4.896 9.18 3.672 8.568-1.224 15.3-8.568 21.42-39.78 23.256-58.14 27.54-4.896 50.796-14.688 71.604-33.66 4.285-4.283 2.449-12.239-3.06-13.463zm-83.232 40.392c-0.612 16.524-9.18 30.6-14.076 45.288-11.016-34.272-21.42-68.544-26.316-104.65 35.496 8.568 69.156 22.032 104.65 31.212-17.136 11.628-36.72 17.748-58.14 21.42-4.284-0.612-6.12 3.06-6.12 6.732z"/>
                <path d="m236.28 134.17h-122.4c-6.12 0-9.18 6.732-6.732 11.628 15.912 35.496 32.436 70.992 47.124 107.71 1.836 4.283 6.732 3.672 8.568 0.611 1.836 3.672 8.568 3.061 8.568-1.836 1.225-20.808 0.612-42.84 11.629-61.2 11.016-17.748 38.556-26.928 56.916-34.884 4.284-1.836 4.284-6.12 2.448-9.18 3.06-4.895 1.224-12.851-6.12-12.851zm-65.484 49.572c-12.241 17.136-9.792 43.452-8.568 64.26-9.18-33.659-22.644-66.096-36.72-97.919h93.636c-18.36 7.343-36.72 17.134-48.348 33.659z"/>
                <path d="m325.63 199.04c-39.168-0.611-77.724-3.06-116.28 4.284-5.508 1.225-7.344 7.956-4.896 12.24 17.136 29.376 32.436 59.976 51.408 88.74 1.224 1.836 3.06 2.447 4.896 2.447 1.224 4.284 9.18 3.673 8.568-1.224-1.836-13.464 1.224-26.316 3.672-39.168 2.448-13.464 2.448-12.24 14.076-18.972 12.852-7.345 31.212-18.973 41.004-31.824 7.956-3.059 7.344-16.523-2.448-16.523zm-60.588 42.229c-2.448 1.224-3.672 3.672-3.672 6.12 0.611 12.239-1.836 25.092-2.448 37.332-11.016-22.645-22.644-45.9-34.884-67.933 26.928-4.284 54.468-3.06 82.008-2.447-1.224 1.224-3.06 2.447-4.284 3.672-11.016 9.792-23.256 17.748-36.72 23.256z"/>
            </svg>
            <p className={styles.announcementMessage}>Tex Mechanica has been translated into 24 languages. You can set your default language by accessing the settings page in the site menu.</p>
        </aside>
    );
};

export default LocalizationAnnouncement;
