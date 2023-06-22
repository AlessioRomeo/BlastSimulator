import React from 'react';
import styles from '../page.module.scss';

function TableTitles() {
    return (
        <div className={`${styles.tableItemsContainer} ${styles.tableTitleContainer}`}>
            <ul id={styles.tableTitlesFormatting}>
                 <div className={styles.leftContainer}>
                     <li>
                         Index
                     </li>
                     <li>
                         Title
                     </li>
                     <li>
                         Start
                     </li>
                     <li>
                         Count
                     </li>
                 </div>
                <div className={styles.rightContainer}>
                    <li>
                        Status
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default TableTitles;