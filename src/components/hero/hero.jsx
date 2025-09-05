import React from 'react';
import styles from './hero.module.css';
import PrimaryButton from '../primary-button/primary-button';

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.infoContainer}>
        <h1>
          Start Your <span className={styles.heading}>GameMaker Journey</span>{' '}
          Today
        </h1>
        <p>
          Learn GameMaker Language in a friendly space built for creators of all
          levels. Simple lessons, practical tips, and the spark to bring your
          ideas to life.
        </p>
        <PrimaryButton text="Get Started" />
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  );
}

export default Hero;
