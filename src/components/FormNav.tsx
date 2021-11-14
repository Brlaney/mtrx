// import React, { useState, useEffect } from 'react';
import * as React from 'react';
import Full from '@/components/global/form-nav/Full';
import H from '@/components/global/form-nav/H';
import ModelIcon from '@/components/global/form-nav/ModelIcon';
import styles from '@/styles/components/FormNav.module.scss';

export default function FormNav() {
  // const [active, setActive] = useState('');

  return (
    <div className={styles.subnav}>

      <div className={styles.outerbox} />

      <div className={styles.stepbox1}>
        <div className={styles.text}>
          Step 1
        </div>
      </div>

      <div className={styles.rodbox1}>
        <H lhs={1} rhs={0} stage={1} />
      </div>

      <div className={styles.stepbox2}>
        <div className={styles.text}>
          Step 2
        </div>
      </div>

      <div className={styles.rodbox2}>
        <H lhs={0} rhs={0} stage={0} />
      </div>

      <div className={styles.stepbox3}>
        <div className={styles.text}>
          Step 3
        </div>
      </div>

      <div className={styles.rodbox3}>
        <H lhs={0} rhs={0} stage={0} />
      </div>

      <div className={styles.modelsvg}>
        <ModelIcon ready={0} />
      </div>

      <div className={styles.modelbox}>
        <div className={styles.text}>
          Analyze your model
        </div>
      </div>

      <div className={styles.outerbox} />

    </div>
  )
};
