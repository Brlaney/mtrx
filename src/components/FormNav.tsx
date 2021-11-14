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
        Step 1
      </div>

      <div className={styles.rodbox1}>
        <Full lhs={1} rhs={0} stage={1} />
      </div>

      <div className={styles.stepbox2}>
        Step 2
      </div>

      <div className={styles.rodbox2}>
        <Full lhs={0} rhs={0} stage={0} />
      </div>

      <div className={styles.stepbox3}>
        Step 3
      </div>

      <div className={styles.rodbox3}>
        <H lhs={0} rhs={0} stage={0} />
      </div>

      <div className={styles.modelsvg}>
        <ModelIcon ready={0} />
      </div>

      <div className={styles.modelbox}>
        Analyze your model
      </div>

      <div className={styles.outerbox}>
        Outer RHS
      </div>

    </div>
  )
};
