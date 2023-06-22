import React from 'react';
import styles from '../page.module.scss';
import MessageCard from "@/app/blast/components/MessageCard";

function Carousel() {

    return (
        <div id={styles.carouselContainer}>
                <MessageCard/>
                <MessageCard/>
                <MessageCard/>
                <MessageCard/>
                <MessageCard/>
                <MessageCard/>
                <MessageCard/>


        </div>
    );
}

export default Carousel;
