import React from 'react';
import styles from '../page.module.scss';

function TableTitles({index, title, start, currentCount, totalCount, status}:
                         {index: number,
                          title: string,
                          start: string,
                          currentCount: string,
                          totalCount: string,
                          status: string}) {
    return (
        <div className={`${styles.tableItemsContainer}`}>
            <ul id={styles.tableItemFormatting}>
                <div className={styles.leftContainer}>
                    <li>
                        <span>Index:</span>{index}
                    </li>
                    <li>
                        <span>Title:</span><h3>{title}</h3>
                    </li>
                    <li>
                        <span>Start:</span>{start}
                    </li>
                    <li>
                        <span>Count:</span>{currentCount} / {totalCount}
                    </li>
                </div>
                <div className={styles.rightContainer}>
                    <li>
                        {status}
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default TableTitles;