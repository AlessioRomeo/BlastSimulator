'use client';
import React, {useMemo, useState} from 'react';
import FilterList from "@/app/dashboard/components/FilterList";
import BlastList from "@/app/dashboard/components/BlastList";
import styles from '../page.module.scss';
import Header from "@/app/(components)/Header";
import moment from "moment";

function Dashboard() {
    const profile = {
        name: 'Alessio',
        id: '1299761'
    }
    const [blastData, setBlastData] = useState([
        {
            index: '1',
            title: 'Lorem ipsum dolor sit amet',
            start: '15/03/2023',
            currentCount: '1000',
            totalCount: '1000',
            status: 'Completed'
        },
        {
            index: '2',
            title: 'Lorem ipsum dolor sit amet',
            start: '16/04/2023',
            currentCount: '1000',
            totalCount: '1000',
            status: 'Completed'
        },
        {
            index: '3',
            title: 'Lorem ipsum dolor sit amet',
            start: '17/05/2023',
            currentCount: '539',
            totalCount: '1000',
            status: 'In Progress'
        },
        {
            index: '4',
            title: 'Lorem ipsum dolor sit amet',
            start: '18/05/2023',
            currentCount: '698',
            totalCount: '1000',
            status: 'In Progress'
        },
        {
            index: '5',
            title: 'Lorem ipsum dolor sit amet',
            start: '19/05/2023',
            currentCount: '0',
            totalCount: '1000',
            status: 'Upcoming'
        },
        {
            index: '6',
            title: 'Lorem ipsum dolor sit amet',
            start: '20/05/2023',
            currentCount: '0',
            totalCount: '1000',
            status: 'Upcoming'
        },
        {
            index: '7',
            title: 'Lorem ipsum dolor sit amet',
            start: '20/05/2023',
            currentCount: '0',
            totalCount: '1000',
            status: 'Upcoming'
        },
        {
            index: '8',
            title: 'Lorem ipsum dolor sit amet',
            start: '20/05/2023',
            currentCount: '0',
            totalCount: '1000',
            status: 'Upcoming'
        },
        {
            index: '9',
            title: 'Lorem ipsum dolor sit amet',
            start: '20/05/2023',
            currentCount: '0',
            totalCount: '1000',
            status: 'Upcoming'
        },
        {
            index: '10',
            title: 'Lorem ipsum dolor sit amet',
            start: '20/05/2023',
            currentCount: '0',
            totalCount: '1000',
            status: 'Upcoming'
        },
        {
            index: '11',
            title: 'Lorem ipsum dolor sit amet',
            start: '20/05/2023',
            currentCount: '0',
            totalCount: '1000',
            status: 'Upcoming'
        },
    ]);
    const [filterStatus, setFilterStatus] = useState("From Latest");
    const filteredData = useMemo(() => {
        let filtered = [...blastData];
        if (filterStatus === "From Oldest"){
            // @ts-ignore
            filtered.sort((a, b) => moment(a.start, "DD/MM/YYYY") - moment(b.start, "DD/MM/YYYY"));
        } else if (filterStatus === "From Latest") {
            // @ts-ignore
            filtered.sort((a, b) => moment(b.start, "DD/MM/YYYY") - moment(a.start, "DD/MM/YYYY"));
        } else {
            filtered = filtered.filter(item => item.status === filterStatus);
        }
        return filtered.map((item, index) => ({
            ...item,
            index: index + 1
        }));
    }, [filterStatus, blastData]);

    return (
        <>
            <Header profile={profile}/>

            <div id={styles.dashboardContainer}>
                <FilterList setFilterStatus={setFilterStatus}/>
                <BlastList blastData={filteredData}/>
            </div>
        </>
    );
}

export default Dashboard;