import React from 'react';
import styles from '../page.module.scss';

function MessageCard() {
    return (
        <div id={styles.messageCardContainer}>
            <img src="https://via.placeholder.com/640x360" alt="Promotion Image"/>
            <div id={styles.labelCardContainer}>
                <h2>+1 917.403.0691</h2>
                <h2>08/23/2023</h2>
                <h2>07:28:13</h2>
            </div>
        </div>
    );
}

export default MessageCard;