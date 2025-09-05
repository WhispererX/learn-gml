import React from 'react';
import styles from './primary-button.module.css';

function PrimaryButton({ text, onClick = () => { } }) {
  return (
    <button className={styles.primaryButton} onClick={onClick}>
      {text}
    </button>
  );
}

export default PrimaryButton;
