import React, {useState} from 'react';
import styles from '../page.module.scss';

// @ts-ignore
function FilterList({setFilterStatus}) {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <button id={styles.filtersButton} onClick={()=>{
                setIsActive(!isActive);
            }}>
                Filters
            </button>
        <div id={styles.menuContainer} className={isActive ? styles.filtersButtonIsActive : ''}>
            <button onClick={() => setFilterStatus("From Latest")}>
                From Latest
            </button>
            <button onClick={() => setFilterStatus("From Oldest")}>
                From Oldest
            </button>
            <button onClick={() => setFilterStatus("Completed")}>
                Completed
            </button>

            <button onClick={() => setFilterStatus("In Progress")}>
                In Progress
            </button>

            <button onClick={() => setFilterStatus("Upcoming")}>
                Upcoming
            </button>
        </div>
        </>
    );
}

export default FilterList;