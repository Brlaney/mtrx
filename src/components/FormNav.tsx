// import React, { useState, useEffect } from 'react';
import * as React from 'react';
import styles from '@/styles/components/FormNav.module.scss';

export default function FormNav() {
  // const [active, setActive] = useState('');

  return (
    <div className={styles.subnav}>

      <div className={styles.outerbox}>
        Outer LHS
      </div>

      <div className={styles.stepbox1}>
        Step 1
      </div>

      <div className={styles.rodbox1}>
        Rod 1
      </div>

      <div className={styles.stepbox2}>
        Step 2
      </div>

      <div className={styles.rodbox2}>
        Rod 2
      </div>

      <div className={styles.stepbox3}>
        Step 3
      </div>

      <div className={styles.rodbox3}>
        Rod 3
      </div>

      <div className={styles.modelbox}>
        Modelbox
      </div>

      <div className={styles.outerbox}>
        Outer RHS
      </div>

    </div>
  )
};
