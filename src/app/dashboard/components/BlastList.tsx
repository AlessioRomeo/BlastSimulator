import React from 'react';
import styles from '../page.module.scss';
import TableTitles from "@/app/dashboard/components/TableTitles";
import TableItem from "@/app/dashboard/components/TableItem";

type blastData = {
    index: number;
    title: string;
    start: string;
    currentCount: string;
    totalCount: string;
    status: string;
    }

interface BlastListProps {
    blastData: blastData[];
}

function BlastList({blastData}: BlastListProps) {
    return (
        <div id={styles.mainContainer}>
            <TableTitles/>
            <a href="http://localhost:3001/blast" id={styles.temporaryLink}>
            {
                blastData.map(item =>
                   <TableItem key={item.index} index={item.index} title={item.title} start={item.start} currentCount={item.currentCount} totalCount={item.totalCount} status={item.status}/>
                )
            }
            </a>
        </div>
    );
}

export default BlastList;