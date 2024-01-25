// components/Card.js

import React from 'react';
import styles from './hero.module.scss'
const Hero = () => {
    return (
        <section className={`${styles.homeHero} container content-center`}  >
            <div className={`mx-10  grid grid-cols-3 gap-4`} >
                <div className="col-span-2">
                    <h4>About us</h4>
                    <h1>Hive Lab</h1>
                    <h2>" Visions "</h2>
                    <p>description</p>
                </div>
                <div className="col-span-1 text-primary">07</div>
            </div>

        </section>

    );
};

export default Hero;
