import React from 'react';
import styles from './header.module.scss';
import Image from "next/image";

type profile = {
    name: string,
    id: string
}

interface ProfileProps {
    profile: profile;
}

function Header({profile}: ProfileProps) {
    return (
        <div id={styles.container}>
            <a href={"/dashboard"}>
                <Image src={'https://www.sendsationaltext.com/wordpress/wp-content/themes/html5blank-stable/img/logo-sendsational-text-marketing.png'} alt={'logo'} width={320} height={80}/>
            </a>
            <h1>
                Welcome {profile.name}
            </h1>
        </div>
    );
}

export default Header;