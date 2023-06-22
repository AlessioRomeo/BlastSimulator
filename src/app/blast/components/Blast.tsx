import React from 'react';
import Header from "@/app/(components)/Header";
import Carousel from "@/app/blast/components/Carousel";

function Blast() {
    const profile = {
        name: 'Alessio',
        id: '1299761'
    }
    return (
        <>
            <Header profile={profile}/>
            <Carousel/>
        </>
    );
}

export default Blast;