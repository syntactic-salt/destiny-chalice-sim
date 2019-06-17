import React from 'react';
import styles from './about.scss';

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Message from the Creator</h1>
            <p>Hey everyone, I built this app to make it easier to manage your chalice drops. I'll be working to enhance the app throughout the season and further into the future if there are opportunities to create additional calculators.</p>
            <h1>Bugs & Feedback</h1>
            <p>You can report bugs or submit feedback on the Discord server. You can access it with this <a href="https://discord.gg/re74rf4" target="_blank">invite</a>.</p>
        </div>
    );
};
