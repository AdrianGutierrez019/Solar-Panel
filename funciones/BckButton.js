'use client'

import React from 'react';
import styles from '@/styles/Childheader.module.css';

function BackButton() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <button className={styles.btn} onClick={goBack}>Volver</button>
  );
}

export default BackButton;